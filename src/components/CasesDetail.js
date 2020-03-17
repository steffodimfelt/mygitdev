import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Styles from '../styles/Stylesheet';
import CaseStats from './CaseStats';

class CasesDetail extends Component {
  
  render() {
    const {setCase} = this.props;
    if (setCase == null){return null;}
    const {imgThumb, headline, textLong, colorSpace, tools, tasks, employer} = setCase;
  
    const innerContainer = { backgroundImage: 'url(' + imgThumb + ')' };

    return (
      <div style={this.props.style}>
        <h3 className="HeaderM">{headline}</h3>
        <div style={{...Styles.ImgOuterContainer}} >
          <div style ={{...Styles.ImgInnerContainer, ...innerContainer}}></div>
        </div>
        <p style={{fontSize: 13, lineHeight: 1.7}} dangerouslySetInnerHTML = {{ __html : textLong  }} />
        <CaseStats title='Färgrymd' array={colorSpace}/>
        <CaseStats title='Verktyg' array={tools}/>
        <CaseStats title='Uppgifter' array={tasks}/>
        <CaseStats title='Uppdragsgivare' array={employer}/>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("state", state)
  return {
    setCase: state.setCaseDetails,
  };
}
CasesDetail.propTypes = {
  setCase: PropTypes.object,
  style: PropTypes.object,
};
CasesDetail.defaultProps = {
  setCase: null
};

export default connect(mapStateToProps)(CasesDetail);