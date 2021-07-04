import styled from "styled-components";
import ListItem from "./ListItem";

const List = ({
  listOfKeys,
  dataCollection,
  isAnchorList,
  level = -1,
  ...rest
}) => {
  return (
    <Wrapper isAnchorList={isAnchorList}>
      {listOfKeys.map((key) => !!dataCollection[key] && (
        <ListItem
          item={{
            ...dataCollection[key],
            level: dataCollection[key].level + level,
          }}
          key={key}
          {...rest}
        />
      ))}
    </Wrapper>
  );
};

export default List;

const Wrapper = styled.div`
  ${({ isAnchorList }) => isAnchorList && "background: #0000000c;"}
`;
