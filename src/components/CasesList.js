import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {selectCase, toggleMenu} from '../actions';

class CasesList extends Component {
  setButtonDispatch(caseItem){
    this.props.selectCase(caseItem);
    this.props.toggleMenu(!this.props.toggle);
  }
  createCasesList(){     
    return this.props.casesData
      .sort((a, b) => a.headline.localeCompare(b.headline))
      .map((caseItem) => {
        return (
          <p
            className='case-list-item lightgrey-col'
            key={caseItem.id}
            onClick={() => this.setButtonDispatch(caseItem)}
          >
            {caseItem.headline} 
          </p>
        );
      });
  }
    
  render(){   
    return(
      <div className='p-v-s24-s60'>
        {this.createCasesList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    casesData: state.casesData,
    toggle: state.caseReducers.toggleMenu,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectCase, toggleMenu}, dispatch);
}

CasesList.propTypes = {
  casesData: PropTypes.array.isRequired,
  selectCase: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired
};

export default connect(mapStateToProps, matchDispatchToProps)(CasesList);