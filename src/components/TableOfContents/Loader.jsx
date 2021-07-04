import styled from "styled-components";

const Loader = () => (
  <Wrapper>
    {[...Array(10)].map((_, index) => (
      <LoaderItem key={`${index}-loaderItem`} />
    ))}
  </Wrapper>
);

export default Loader;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const LoaderItem = styled.li`
  height: 16px;
  margin: 8px 32px;
  background: #0000000c;
  :nth-child(2),
  :nth-child(3),
  :nth-child(4) {
    margin-left: 48px;
  }
  :nth-child(5),
  :nth-child(6),
  :nth-child(7),
  :nth-child(8) {
    margin-left: 64px;
  }
  :nth-child(2n):not(:last-child) {
    margin-right: 64px;
  }
`;
