import React from 'react';
import Header from './header/Header';
import Home from './homePage/Home'
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ul {
    list-style: none; 
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
  }
`;

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Home />
    </div>
  );
};

export default App;


