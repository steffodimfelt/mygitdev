import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './index.css';
import CasesDetail from './components/CasesDetail';
import CaseMenu from './components/CaseMenu';
import {toggleMenu} from './actions';

class App extends Component {
  render() {
    const toggleMenu = () => {this.props.toggleMenu(!this.props.toggle);};
    const MenuOn = () => {
      return (<div id='menu' 
        style={{width: '4rem', height: '4rem', borderRadius: '50%', position: 'fixed', textAlign: 'center'}}
        className='m-s24 pointer pink-bg shadow-1'
        onClick={toggleMenu}
      >
        <h2 style={{color: 'white', verticalAlign: 'middle', lineHeight: '1.5rem', fontSize:'1.5rem'}}>+</h2>
      </div>);
    };
    const MenuOff = () => {
      return (<div id='menu' 
        style={{width: '4rem', height: '4rem', borderRadius: '50%', position: 'fixed', textAlign: 'center'}}
        className='m-s24 pointer purple-bg shadow-1'
        onClick={toggleMenu}
      >
        <h2 style={{color: 'white', verticalAlign: 'middle', lineHeight: '1.5rem', fontSize:'1.5rem'}}>-</h2>
      </div>);
    };
    
    return (
      <div className='col'>
        <div className='row '>
          <div id='hero' className='full-screen overflow-hidden' >
            <div style={{backgroundImage: 'url(https://raw.githubusercontent.com/steffodimfelt/steffodimfelt.github.io/master/static/img/cases/print/2x1FriskisV15_4.jpg)', width: '100%', height: '100%',  backgroundSize: 'cover', backgroundRepeat: 'no-repeat',  backgroundPosition: 'center center' }} />
          </div>
        </div>  
        <div className='col full-screen hero-title'>
          <div className='f-s1 f-m2' />
          <div className='row f-s1 f-m2' >
            {/* Outer part */}
            <div className='f-s1' />
            {/* Inner part */}
            <div className='f-s10 row pink-border border-s6 border-solid p-s6 '>
              <div className='f-s2 flex pink-bg '>
                <h1 className='hero-font lightgrey-col'>Steffos Portfolio</h1>
              </div>
            </div>
            {/* END: Inner part */}
            <div className='f-s1' />
            {/* END: Outer part */}
          </div>
          <div className='f-s1 f-m2' />
        </div>

        <CasesDetail/>

        {this.props.toggle ? <CaseMenu /> : null }
        {this.props.toggle ? <MenuOff /> : <MenuOn /> }
        
        {/* <div id='menu' 
          style={{width: '4rem', height: '4rem', borderRadius: '50%', position: 'fixed', textAlign: 'center'}}
          className='m-s24 pointer pink-bg shadow-1'
          onClick={toggleMenu}
        >
          <h2 style={{color: 'white', verticalAlign: 'middle', lineHeight: '1.5rem', fontSize:'1.5rem'}}>+</h2>
        </div> */}
      
      </div>
    );
  }
}
App.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  return{
    toggle: state.caseReducers.toggleMenu,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({toggleMenu}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
