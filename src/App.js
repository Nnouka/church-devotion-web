import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LoginPage from './guest/LoginPage';
import { WelcomePage } from './guest/WelcomePage';

function App() {
  return (
    <div className="App">
      <Route exact path='/'>
        <WelcomePage />
      </Route>
      <Route exact path='/login' render={() => (
        <LoginPage />
      )} />

    </div>
  );
}

export default App;
