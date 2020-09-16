import React, { Component} from 'react';
import PomodoroClock from './containers/PomodoroClock';

class App extends Component {

  render(){
    return (
      <div className="App">
        <PomodoroClock />
      </div>
    );
  }
}
export default App;
