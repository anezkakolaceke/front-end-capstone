import './App.css';
import React from 'react';
import Footer from './Footer.js';
import Nav from './Nav.js';
import Header from './Header.js';
import Main from './Main.js';

function App() {
  return (
    <React.Fragment>

      <Nav />

      <Header />

      <Main />

      <Footer />

    </React.Fragment>
  );
}

export default App;
