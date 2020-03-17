import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Styles from '../styles/Stylesheet';

class CasesDetail extends Component {
  
  render() {
    const {setCase} = this.props;
    console.log("setCase", setCase)
    if (setCase == null){return null;}
  
    const innerContainer = { backgroundImage: 'url(' + setCase.imgThumb + ')' };

    return (
      <div style={this.props.style}>
        <h3 className="HeaderM">{setCase.headline}</h3>
        <div style={{...Styles.ImgOuterContainer}} >
          <div style ={{...Styles.ImgInnerContainer, ...innerContainer}}></div>
        </div>
        <p style={{fontSize: 13, lineHeight: 1.7}} dangerouslySetInnerHTML = {{ __html : this.props.setCase.textLong  }} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log("state i Cases", state.setCaseDetails)
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