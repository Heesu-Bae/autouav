import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Bar from './Bar';
import Main from './Main';
import Info from './Info';
import Ledger from './Ledger';
import Coin from './Coin';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <div className="Layout_Column">
                <Bar />
            </div>
            <div className="Layout_Column">
                <Main />
            </div>
            <div className="Layout_Column">
                <Info />
            </div>
            <div className="Layout_Column">
                <Ledger />
            </div>
            <div className="Layout_Column">
                <Coin />
            </div>
        </div>
    );
  }
}

export default App;
