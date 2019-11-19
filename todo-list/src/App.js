import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo';

import Header from './components/Header';
import Auth from './components/Auth';
import AuthContext from './components/auth-context';

const App = props => {
 const [page, setPage] = useState("Auth");
const [authStatus, setAuthStatus] = useState(false);

 // Переключение между страничками. Решил сделать не через роутер, а через Хуки.
 const switchPage = (pageName) => {
   setPage(pageName)
 }

 const login = () => {
   setAuthStatus(true);
 }

  return (
    <div className="App">
      <AuthContext.Provider value={{status: authStatus, login: login}}> 
        <header className="App-header">
          <Header
          onLoadTodoes={switchPage.bind(null, "todoes")}
          onLoadAuth={switchPage.bind(null, "auth")}
          />
          <hr/>  
        </header>
        {page === "todoes" ? <Todo/> : <Auth/>}
      </AuthContext.Provider>
      
    </div>
  );
};

export default App;