import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Routes from './quiz/Routes';
import { MovieProvider } from './quiz/moviecontext';
import { AuthProvider } from './quiz/authcontext';

function App() {
  return (
    <div className="App">
    <AuthProvider>


    <MovieProvider>
    <Routes />    
    </MovieProvider>
      </AuthProvider>
        </div>
  );
}

export default App;
