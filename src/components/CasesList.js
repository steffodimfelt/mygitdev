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

  clientPick (clientID) {
    let pickClient = '';
    if (isNaN(clientID) ){
      pickClient = clientID;
    } else {
      for (const value of  this.props.clientsData) {
        const clientConvert = parseInt(clientID);
        if (value.id === clientConvert) {
          pickClient = value.title;
        }
      }
    }
    return <p className='case-list-item-client lightgrey-col' >{pickClient}</p>;
  }

  createCasesList(){ 
    let cases = this.props.selectedCategory ? this.props.selectedCategory : this.props.casesData;
    return cases
      .sort((a, b) => a.headline.localeCompare(b.headline))
      .map((caseItem) => {
        return (
          <a 
            id='case-top-link'
            href="#case"
            key={caseItem.id}
          >
            <div onClick={() => this.setButtonDispatch(caseItem)}>
              <p className='case-list-item lightgrey-col'>
                {caseItem.headline} 
              </p>
              {this.clientPick (caseItem.client)}
            </div>
          </a>
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
    clientsData: state.clientsData,
    toggle: state.caseReducers.toggleMenu,
    selectedCategory: state.selectedCategory
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectCase, toggleMenu}, dispatch);
}

CasesList.propTypes = {
  casesData: PropTypes.array.isRequired,
  clientsData: PropTypes.array.isRequired,
  selectCase: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired,
  toggle: PropTypes.bool.isRequired,
  selectedCategory: PropTypes.array,
};

export default connect(mapStateToProps, matchDispatchToProps)(CasesList);