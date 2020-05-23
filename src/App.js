import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LoginPage from './guest/LoginPage';
import { WelcomePage } from './guest/WelcomePage';
import LanguageChanger from './lang/LanguageChanger';
import * as AppUtils from './utils/AppUtils';
import DashBoard from './home/DashBoard';

class App extends React.Component {
  state = {
    lang: 'en',
    authenticated: AppUtils.getAuthState()
  }
  onLoginSuccess = () => {
    this.setState((prevState) => prevState.authenticated = true);
    AppUtils.setAuthenticationState(true);
  }
  logout = () => {
    AppUtils.clearLocalStorage();
    this.setState(prevState => prevState.authenticated = false);
  }
  render () {
    const {lang, authenticated} = this.state;
    const changeLange = (loc) => {
      this.setState((currentState) => currentState.lang = loc);
    }
    return (
      <div className="App">
        <Route exact path='/'>
          <WelcomePage lang={lang}/>
        </Route>
        <Route exact path='/login' render={({history}) => authenticated ? (
          <DashBoard lang={lang} onLogout={
            () => {
              this.logout();
              history.push("/login");
            }
          }/>
        ) : (
          <LoginPage lang={lang} onLogin={() => {
            this.onLoginSuccess();
            history.push('/dashboard');
          }}/>
        )} />
        <Route exact path='/dashboard' render={
          ({history}) => authenticated ? (
            <DashBoard lang={lang} onLogout={
              () => {
                this.logout();
                history.push("/login");
              }
            } />
          ) : (
            <LoginPage lang={lang} onLogin={() => {
              this.onLoginSuccess();
              history.push('/dashboard');
            }}/>)}
          />
        <LanguageChanger onLanguageChanged={changeLange}/>
  
      </div>
    );
  }
  
}

export default App;
