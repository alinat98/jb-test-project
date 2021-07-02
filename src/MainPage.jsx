import { Router } from "react-router";
import {createBrowserHistory} from 'history'
import styled from "styled-components";
import TableOfContents from "./components/TableOfContents";

const history = createBrowserHistory()

const MainPage = () => {
  return (
    <Router history={history}>
      <Wrapper>
        <Header />
        <TableOfContents />
        <MainContent />
      </Wrapper>
    </Router>
  );
};

export default MainPage;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 280px auto;
  grid-template-rows: 70px calc(100vh - 70px);
`;
const Header = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
  border-bottom: 1px solid #cdcdcd;
`;
const MainContent = styled.div`
  grid-column: 2;
  grid-row: 2;
  border-left: 1px solid #cdcdcd;
`;
