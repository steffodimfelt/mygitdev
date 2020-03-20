
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
        <div className='row '>
          <div id='hero' className='full-screen overflow-hidden' ><img className="center-center img-full-screen img-center-adjust" src='https://raw.githubusercontent.com/steffodimfelt/steffodimfelt.github.io/master/static/img/cases/web/2x1-DoIt-02.jpg' /></div>
          
        </div>
        
        {openMenu ? <CaseMenu /> : null }
       {/* <div id="InnerContainer" className='row'>
      <CasesList style={{flex: 4, top: 0}} />
      <div style={{flex: 6, paddingLeft: 15}}>
      <CasesDetail style={{ top: 0}}/>
      </div>
      </div> */}

      <div id='menu' 
      style={{width: '4rem', height: '4rem', borderRadius: '50%', position: 'fixed', textAlign: 'center'}}
      className='m-s24 pointer purple-bg shadow-1'
      onClick={toggleMenu}
      >
        <h2 style={{color: 'white', verticalAlign: 'middle', lineHeight: '1.5rem', fontSize:'1.5rem'}}>+</h2>
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
