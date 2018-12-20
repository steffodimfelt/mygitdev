import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class CasesDetail extends Component {
  render() {
    if (this.props.porto == null){return null;}
    return (
      <div style={this.props.style}>
        <h3 style={{margin: 0, padding: 0, marginBottom: 10}}>{this.props.porto.headline}</h3>
        <div>
          <img style={{width: 200, height: 200}} src={this.props.porto.imgThumb} />
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