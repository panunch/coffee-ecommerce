import { Fragment } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router} from 'react-router-dom';
import { Route, Routes } from 'react-router-dom'; 
import React from 'react';
import AppNavBar from './components/AppNavBar';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Products from './pages/Products';
import logo from './logo.svg';
import Error from './pages/Error';
import { useState, useEffect } from 'react';
import './App.css';
import { UserProvider } from './UserContext';

function App() {
  // State hook for the user state that's defined here for global scope
  // Initialized as an object with properties from the local storage 
  // This will be used to store the user information and will be used for validating if a user is logged in on the app or not 
  const [user, setUser] = useState({
    // email: localStorage.getItem('email')
    id: null, 
    isAdmin: null
  });

  // Function for clearing local storage on log out 
  const unsetUser = () => {
    localStorage.clear()
  }

  // Used to check if the user information is properly stored upon login 
  useEffect(() => {
    console.log(user);
    console.log(localStorage)
  }, [user])

  return ( 
    <UserProvider value={{user, setUser, unsetUser}}>
        <Router>
          <Container fluid>
            <AppNavBar />
            <Routes>  
              <Route path='/' element = {<Home />} />
              <Route path='/products' element = {<Products />} />
              <Route path='/register' element = {<Register />} />
              <Route path='/login' element = {<Login />} />
              <Route path='/logout' element = {<Logout />} />
              <Route path='*' element={<Error />} />
            </Routes>
          </Container>
        </Router>
    </UserProvider>
  );
}

export default App;