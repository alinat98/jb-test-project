import { useEffect, useState } from "react";
import styled from "styled-components";
import List from "./List";
import Loader from "./Loader";

const TableOfContents = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({});
  const [selected, setSelected] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch("http://localhost:8000")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <Wrapper>
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
`;
