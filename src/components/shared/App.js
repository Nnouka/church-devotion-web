import React, {Component, Fragment} from 'react';
import '../../App.css';
import NavigationGraph from '../../routes/NavigationGraph';
class App extends Component {
    render () {
    return (
        <Fragment>
          <NavigationGraph />
        </Fragment>
    );
  }
  
}

export default App;
