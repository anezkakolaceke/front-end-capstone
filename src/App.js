import './App.css';
import React from 'react';
import Footer from './components/Footer.js';
import Nav from './components/Nav.js';
import Header from './components/Header.js';
import Main from './components/Main.js';

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
