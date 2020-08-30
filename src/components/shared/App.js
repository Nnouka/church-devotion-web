import React, {Component, Fragment} from 'react';
import '../../App.css';
import * as AppUtils from '../../utils/AppUtils';
import NavigationGraph from './NavigationGraph';
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
