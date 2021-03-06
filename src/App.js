import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import './index.css';
import CasesDetail from './components/CasesDetail';
import CaseMenu from './components/CaseMenu';
import {toggleMenu, mapCategories} from './actions';

class App extends Component {

  state = {doubleToggle: false}

  componentDidMount() {
    this.props.mapCategories();
  }

  render() {
    const toggleMenu = () => { this.props.toggleMenu(!this.props.toggle); doubleToggleFunction(false);};
    const doubleToggleFunction = toggleState => {
      this.setState({doubleToggle: toggleState});
    };
    const MenuOn = () => {
      return (<div id='menu' 
        className='menu-style m-s24 pointer purple-bg shadow-1 '
        onClick={toggleMenu}
      >
        <img alt='Menu button' src={require('./img/icons/menu.svg')} style={{width: '2rem'}} />  
      </div>);
    };
    const MenuOff = () => {
      return (<div id='menu' 
        className='menu-style m-s24 pointer purple-bg shadow-1'
        onClick={toggleMenu}
      >
        <img alt='Close button' src={require('./img/icons/close.svg')} style={{width: '2rem'}} />
      </div>);
    };

    const FirstPage = () => {
      return (
        <div className='col'>
          <div className='row '>
            <div id='hero' className='full-screen overflow-hidden' >
              <div style={{backgroundImage: 'url(https://raw.githubusercontent.com/steffodimfelt/mygitdev/master/src/img/bg-front.png)', width: '100%', height: '100%',  backgroundSize: 'cover', backgroundRepeat: 'no-repeat',  backgroundPosition: 'center center' }} />
            </div>
          </div>  
          <div className='col full-screen hero-title'>
            <div className='f-s1 f-m2' />
            <div className='row f-s1 f-m2' >
              {/* Outer part */}
              <div className='f-s1' />
              {/* Inner part */}
              <div className='f-s10 row  p-s6 '>
                <div className='f-s2 flex  '>
                  <h1 className='lightgrey-col hero-font '>Steffos Portfolio</h1>
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
        {!this.props.setCase ? <FirstPage /> : <CasesDetail doubleToggleFunction={doubleToggleFunction} doubleToggle={this.state.doubleToggle} />}
        {this.props.toggle ? <CaseMenu  /> : null }
        {this.props.toggle ? <MenuOff /> : <MenuOn /> }      
      </div>
    );
  }
}
App.propTypes = {
  toggleMenu: PropTypes.func.isRequired,
  mapCategories: PropTypes.func.isRequired,
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
  return bindActionCreators({toggleMenu, mapCategories}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
