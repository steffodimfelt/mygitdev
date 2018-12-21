import React, { Component } from 'react';
import './App.css';
import CasesList from './components/CasesList';
import CasesDetail from './components/CasesDetail';

class App extends Component {
  render() {
    return (
      <div id="MainContainer">
        <div id="App">
          <h1>Steffos Portfolio</h1>
          <div id="InnerContainer">
            <CasesList style={{flex: 4, top: 0}} />
            <div style={{flex: 6, paddingLeft: 15}}>
              <CasesDetail style={{ top: 0}}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
