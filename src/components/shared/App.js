import React, {Component, Fragment} from 'react';
import NavigationGraph from '../../routes/NavigationGraph';
import LanguageChanger from "../lang/LanguageChanger";
import LoadingBar from "react-redux-loading";
class App extends Component {
    render () {
    return (
        <Fragment>
          <LoadingBar />
          <NavigationGraph />
          <LanguageChanger />
        </Fragment>
    );
  }
  
}

export default App;
