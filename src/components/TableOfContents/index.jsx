import debounce from "lodash.debounce";
import { useEffect, useState } from "react";
import styled from "styled-components";
import List from "./List";
import Loader from "./Loader";
// import { ReactComponent as ResetIcon } from "../../assets/delete.svg";

const TableOfContents = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://localhost:8000?search=${search}`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, [search]);

  const changeHandler = (e) => {
    const { value } = e.target;
    if (value.length > 2) {
      setSearch(value);
    } else {
      setSearch("");
    }
  };

  const debouncedChangeHandler = debounce(changeHandler, 1000);

  return (
    <Wrapper>
      <InputContainer>
        <SearchInput
          onChange={debouncedChangeHandler}
          placeholder="Search"
          disabled={isLoading}
        />
        {/* {!!search.length && <Reset onClick={() => setSearch('')}/>} */}
      </InputContainer>
      {isLoading ? (
        <Loader />
      ) : (
        data.topLevelIds && (
          <List
            listOfKeys={data.topLevelIds}
            dataCollection={data.entities.pages}
            data={data.entities}
            selected={selected}
            setSelected={setSelected}
          />
        )
      )}
    </Wrapper>
  );
};

export default TableOfContents;

const Wrapper = styled.ul`
  padding: 24px 0px 0px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
`;
const InputContainer = styled.div`
  position: relative;
  display: flex;
`;
const SearchInput = styled.input`
  border: 1px solid rgba(39, 40, 44, 0.2);
  margin: 0px 30px 16px;
  padding: 7px 22px 7px 16px;
  outline: none;
  width: 100%;
`;
// const Reset = styled(ResetIcon)`
//   position: absolute;
//   width: 16px;
//   right: 35px;
//   top: 8px;
//   fill: #cdcdcd;
//   cursor: pointer;
//   transition: .2s;
//   :hover {
//     fill: #a9a9a9;
//   }
// `;
