
import React, { Component } from 'react';
import './index.css';
import CasesList from './components/CasesList';
import CasesDetail from './components/CasesDetail';
import CaseMenu from './components/CaseMenu';

class App extends Component {
  state = {
    openMenu: false
  }
  
  render() {
    const {openMenu} = this.state;
    const toggleMenu = () => {this.setState({openMenu: !openMenu});};

    return (
      <div className='col'>
        <div className='row'>
          <div id='hero' className='f-s12 h-20-rem purple-bg'></div>
        </div>
        <div className='row'>
          <div className='f-s0 f-l2'></div>
          <div id='title' className='f-s8' style={{height: '200rem', backgroundColor:'red'}}>Steffos portfolio</div>
          <div className='f-s0 f-l2'></div>
        </div>
        {openMenu ? <CaseMenu /> : null }
       {/* <div id="InnerContainer" className='row'>
      <CasesList style={{flex: 4, top: 0}} />
      <div style={{flex: 6, paddingLeft: 15}}>
      <CasesDetail style={{ top: 0}}/>
      </div>
      </div> */}

      <div id='menu' 
      style={{width: '5rem', height: '5rem', backgroundColor: 'yellow', borderRadius: '50%', position: 'fixed', top: '24px', left: '24px', textAlign: 'center'}}
      className='pointer'
      onClick={toggleMenu}
      >
        <h2 style={{verticalAlign: 'middle', lineHeight: '35px', fontSize:'24px'}}>+</h2>
      </div>
      </div>
      // <div className='row'>
      //   <div style={{backgroundColor: 'red', height: '30px'}} className='f-s1 f-xl12'>RAD 1</div>
      //   <div style={{backgroundColor: 'yellow', height: '30px'}} className='f-s1'>RAD 2</div>
      
      // </div>
      // <div id='MainContainer' className='col'>
      //   <h1>Steffos Portfolio</h1>

      //   <div id="InnerContainer">
      //     <CasesList style={{flex: 4, top: 0}} />
      //     <div style={{flex: 6, paddingLeft: 15}}>
      //       <CasesDetail style={{ top: 0}}/>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default App;
