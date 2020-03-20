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
      <div className='fixed-top full-hundred lightgrey-bg overflow-auto' >
        <div style={{...innerContainer, width: '100%', height: 450,  backgroundSize: 'cover', backgroundRepeat: 'no-repeat',  backgroundPosition: 'center center' }}>
        </div>
        <div className='col'>
          <div className='row'>
            <div className='f-l2' />
            <div className='f-l8'>
              <h3>{headline}</h3>
            </div>
            <div className='f-l2' />
          </div>
          <div className='row'>
            <div className='f-l2' />
            <div className='f-l8'>
              {/* TODO: Gör en mappad text istället */}
              <p dangerouslySetInnerHTML = {{ __html : textLong  }} />
            </div>
            <div className='f-l2' />
          </div>
        </div>
        <div className='row'>
          <div className='f-l2' />
          <div className='f-l4'>bild 1</div>
          <div className='f-l4'>bild 2</div>
          <div className='f-l2' />
        </div>
        <div className='row'>
          <div className='f-l2' />
          <div className='row f-l8'>
            <div className='f-l1'><CaseStats title='Färgrymd' array={colorSpace}/></div>
            <div className='f-l1'><CaseStats title='Verktyg' array={tools}/></div>
            <div className='f-l1'><CaseStats title='Uppgifter' array={tasks}/></div>
            <div className='f-l1'><CaseStats title='Uppdragsgivare' array={employer}/></div>
          </div>
          <div className='f-l2' />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
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