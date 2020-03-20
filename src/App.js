
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
          <div id='hero' className='full-screen overflow-hidden' >
            <img className="center-center img-full-screen img-center-adjust" src='https://raw.githubusercontent.com/steffodimfelt/steffodimfelt.github.io/master/static/img/cases/print/2x1FriskisV15_4.jpg' />
          </div>
          
        </div>
        
       
        {/* <div id="InnerContainer" className='row'>
      <CasesList style={{flex: 4, top: 0}} />
      <div style={{flex: 6, paddingLeft: 15}}>
      <CasesDetail style={{ top: 0}}/>
      </div>
      </div> */}


        <div className='col full-screen hero-title'>
          <div className='f-s1 f-m2' />
          <div className='row f-s1 f-m2' >
            {/* Outer part */}
            <div className='f-s1' />
            {/* Inner part */}
            <div className='f-s10 row pink-border border-s6 border-solid p-s6 '>
              <div className='f-s1 pink-bg' />
              <div className='f-s2 flex text-align-center pink-bg' style={{verticalAlign: 'middle'}}>
                <h1 className='hero-font lightgrey-col' style={{margin: 'auto', textAlign: 'center'}}>Steffos Portfolio</h1>
              </div>
              <div className='f-s1 pink-bg' />
            </div>
            {/* END: Inner part */}
            <div className='f-s1' />
            {/* END: Outer part */}
          </div>
          <div className='f-s1 f-m2' />
        </div>

        {openMenu ? <CaseMenu /> : null }

        {/* <div id='hero-title'  className='row hero-title' >
          <div className='f-s1 f-m2' />
          <div className='col f-s10 f-m8 full-screen' >
          
            <div className='f-s1'  />
            <div className='f-s2'  >
              <div 
                className='flex pink-border border-s6 border-solid p-s6'
                style={{height: 200}}
              >

                <div 
                className='full-hundred pink-bg text-align-center' >
                  <h1  className='font-size-xl font-lineheight-xl lightgrey-col'>Steffos Portfolio</h1>
                </div>
              </div>
            </div>
            <div className='f-s1' />

          </div>
          <div className='f-s1 f-m2' />
        </div> */}


        <div id='menu' 
          style={{width: '4rem', height: '4rem', borderRadius: '50%', position: 'fixed', textAlign: 'center'}}
          className='m-s24 pointer pink-bg shadow-1'
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
