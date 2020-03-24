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
    const toggleMenu = () => { this.props.toggleMenu(!this.props.toggle);};
    const MenuOn = () => {
      return (<div id='menu' 
        className='menu-style m-s24 pointer pink-bg shadow-1 '
        onClick={toggleMenu}
      >
        <img  src={require('./img/icons/menu.svg')} style={{width: '2rem'}} />  
      </div>);
    };
    const MenuOff = () => {
      return (<div id='menu' 
        className='menu-style m-s24 pointer purple-bg shadow-1'
        onClick={toggleMenu}
      >
        <img  src={require('./img/icons/close.svg')} style={{width: '2rem'}} />
      </div>);
    };

    const FirstPage = () => {
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
        </div>
      );
    };
    
    return (
      <div  className='col'>
        
        {!this.props.setCase ? <FirstPage /> : <CasesDetail />}
        

        {this.props.toggle ? <CaseMenu /> : null }
        {this.props.toggle ? <MenuOff /> : <MenuOn /> }
       
      </div>
    );
  }
}
App.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
  setCase: PropTypes.object,
};

function mapStateToProps(state) {
  return{
    toggle: state.caseReducers.toggleMenu,
    setCase: state.setCaseDetails,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({toggleMenu}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
