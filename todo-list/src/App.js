import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';

const App = props => {
 const [page, setPage] = useState("Auth");

 const switchPage = (pageName) => {
   setPage(pageName)
 }


  return (
    <div className="App">
      <header className="App-header">
        <Header
        onLoadTodoes={switchPage.bind(null, "todoes")}
        onLoadAuth={switchPage.bind(null, "auth")}
        />
        <hr/>  
      </header>
      {page === "auth" ? <Auth/> : <Todo/>}
    </div>
  );
};

export default App;


{/* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div> */}