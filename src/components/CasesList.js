import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {selectCase, toggleMenu} from '../actions';

class CasesList extends Component {

  state = {selectedCase: this.props.setCase != null ? this.props.setCase.id : null}

  setButtonDispatch(caseItem){
    this.setState({selectedCase: caseItem.id});
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
        const styles = caseItem.id === this.state.selectedCase
          ? 'case-list-item text-align-left purple-bg'
          : 'case-list-item text-align-left pink-bg';

        return (
          <a 
            id='case-top-link'
            href="#case"
            key={caseItem.id}
          >
            <div className={styles} onClick={() => this.setButtonDispatch(caseItem)}>
              <p id='case-list-item-title' className='lightgrey-col '>
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
      <div className='p-v-s76-s60'>
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
    selectedCategory: state.selectedCategory,
    setCase: state.setCaseDetails,
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
  setCase: PropTypes.object,
};

CasesList.defaultProps = {
  setCase: null
};

export default connect(mapStateToProps, matchDispatchToProps)(CasesList);