import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Styles from '../styles/Stylesheet';

class CasesDetail extends Component {
  
  render() {

    if (this.props.porto == null){return null;}
    const innerContainer = { backgroundImage: 'url(' + this.props.porto.imgThumb + ')' };

    return (
      <div style={this.props.style}>
        <h3 className="HeaderM">{this.props.porto.headline}</h3>
        <div style={{...Styles.ImgOuterContainer}} >
          <div style ={{...Styles.ImgInnerContainer, ...innerContainer}}></div>
        </div>
        <p style={{fontSize: 13, lineHeight: 1.7}} dangerouslySetInnerHTML = {{ __html : this.props.porto.textLong  }} />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    porto: state.activePortoCase,
  };
}
CasesDetail.propTypes = {
  porto: PropTypes.object,
  style: PropTypes.object,
};
CasesDetail.defaultProps = {
  porto: null
};

export default connect(mapStateToProps)(CasesDetail);