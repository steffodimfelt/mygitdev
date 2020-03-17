import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {selectCase} from '../actions';

class CasesList extends Component {
  createCasesList(){     
    return this.props.casesData
      .sort((a, b) => a.headline.localeCompare(b.headline))
      .map((caseItem) => {
        return (
          <p
            style={{lineHeight: 1, margin: 0, padding: 0, marginBottom: 10, fontSize: 11, cursor: 'pointer'}}
            key={caseItem.id}
            onClick={() => this.props.selectCase(caseItem)}
          >
            {caseItem.headline} 
          </p>
        );
      });
  }
    
  render(){    
    return(
      <div style={this.props.style}>
        {this.createCasesList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    casesData: state.casesData,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({selectCase: selectCase}, dispatch);
}

CasesList.propTypes = {
  casesData: PropTypes.array.isRequired,
  selectCase: PropTypes.func.isRequired,
  style: PropTypes.object,
};

export default connect(mapStateToProps, matchDispatchToProps)(CasesList);