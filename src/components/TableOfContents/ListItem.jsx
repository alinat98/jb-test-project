import { useState } from "react";
import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import { ReactComponent as ArrowIcon } from "../../assets/arrow-icon.svg";
import List from "./List";

const ListItem = ({ item, ...rest }) => {
  const { data, selected, setSelected } = rest;
  const { title, url, pages = [], anchors = [], level, anchor = "" } = item;
  const [isOpen, setIsOpen] = useState(false);
  const isAnchorList = selected === item.id && isOpen;

  const handleSelectItem = () => {
    setSelected && setSelected(item.id);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Wrapper>
        <Title
          to={{
            pathname: url,
            hash: anchor,
          }}
          onClick={handleSelectItem}
          level={level}
          isOpen={isOpen}
          isSelected={selected === item.id}
          isHovered={isAnchorList}
        >
          <Arrow isOpen={isOpen} isVisible={pages.length > 0} />
          <span>{title}</span>
        </Title>
      </Wrapper>
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
    </>
  );
};

export default ListItem;

const anim = keyframes`
  0% {
    max-height: 0px;
    opacity: 0;
  }
  100% {
    max-height: 64px;
    opacity: 1;
  }
`;

const Wrapper = styled.li`
  ${({ disableAnimation }) =>
    !disableAnimation &&
    css`
      animation: ${anim} 0.2s linear forwards;
    `}
`;
const Arrow = styled(ArrowIcon)`
  transform: ${({ isOpen }) => (isOpen ? "none" : "rotate(-90deg)")};
  min-width: 12px;
  max-width: 12px;
  height: 7px;
  margin-right: 4px;
  margin-top: 5px;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};
  transition: 0.2s;
`;
const Title = styled(Link)`
  padding: ${({ level = -1 }) => `8px 32px 8px ${32 + (+level+1) * 16}px`};
  display: flex;
  box-sizing: border-box;
  font-weight: ${({ isOpen, isSelected }) =>
    isOpen && isSelected ? "bold" : "normal"};
  ${({ isOpen }) => isOpen && `svg {transform: none;}`}
  :hover {
    background: #0000000c;
  }
  ${({ isHovered }) => isHovered && `background: #0000000c;`}
  cursor: pointer;
  transition: 0.2s;
`;
