import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Login from './Login';
import Events from './Events'

import { ApiClient } from './ApiClient';

import { useState, useEffect } from 'react';

function App() {

  ///////////////////////// LOGIN \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
  const client = new ApiClient(() => token, () => logout) 
  const [token, setToken] = useState(window.localStorage.getItem("token"))
  const [authenticated, setAuthenticated] = useState(false)
  
  const login = (token) => {
    console.log(window.localStorage.getItem("token"))
    window.localStorage.setItem("token", token)
    console.log(window.localStorage.getItem("token"))
    setToken(token);
    setAuthenticated(true)
  }

  const logout = () => {
    window.localStorage.removeItem("token")
    setToken(undefined)
    setAuthenticated(false)
  }

  useEffect(() => {
    if (token) {
      setAuthenticated(true)
    }
  }, []);
  

    return <>{
    token && authenticated ? <Events client={client} loggedIn={token} />
     : 
    <Login client={client} loggedIn={(token) => login(token)}/>
    }
  </>
}

export default App;
