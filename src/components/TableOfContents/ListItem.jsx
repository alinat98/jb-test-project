import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ArrowIcon } from "../../assets/arrow-icon.svg";
import List from "./List";

const ListItem = ({ item, ...rest }) => {
  const { data, selected, setSelected } = rest;
  const { title, url, pages = [], anchors = [], level } = item;
  const [isOpen, setIsOpen] = useState(false);
  const isAnchorList = selected === item.id && isOpen;

  const handleSelectItem = () => {
    setIsOpen(!isOpen);
    setSelected && setSelected(item.id);
  };

  return (
    <Wrapper>
      <Title
        to={url}
        onClick={handleSelectItem}
        level={level}
        isOpen={isOpen}
        isSelected={selected === item.id}
        isHovered={isAnchorList}
      >
        <Arrow isOpen={isOpen} isVisible={pages.length > 0}/>
        {title}
      </Title>
      {isAnchorList && (
        <List
          listOfKeys={anchors}
          dataCollection={data.anchors}
          isAnchorList
          level={item.level}
        />
      )}
      {isOpen && pages.length > 0 && (
        <List listOfKeys={pages} dataCollection={data.pages} {...rest} />
      )}
    </Wrapper>
  );
};

export default ListItem;

const Wrapper = styled.li``;
const Arrow = styled(ArrowIcon)`
  transform: ${({ isOpen }) => (isOpen ? "none" : "rotate(-90deg)")};
  width: 12px;
  height: 7px;
  margin-right: 4px;
  visibility: ${({isVisible}) => isVisible ? 'visible' : 'hidden'};
`;
const Title = styled(Link)`
  padding: ${({ level = 0 }) => `8px 32px 8px ${32 + +level * 16}px`};
  display: block;
  box-sizing: border-box;
  font-weight: ${({ isOpen, isSelected }) =>
    isOpen && isSelected ? "bold" : "normal"};
  ${({ isOpen }) => isOpen && `svg {transform: none;}`}
  :hover {
    background: #0000000c;
  }
  ${({ isHovered }) => isHovered && `background: #0000000c;`}
  cursor: pointer;
`;
