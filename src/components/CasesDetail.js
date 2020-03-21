import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CaseStats from './CaseStats';

class CasesDetail extends Component {
  
  render() {
    const {setCase} = this.props;
    if (setCase == null){return null;}
    const {imgThumb, headline, textLong, colorSpace, tools, tasks, employer} = setCase;
  
    

    return (
      <div className='fixed-top full-hundred lightgrey-bg overflow-auto' >
        <div style={{backgroundImage: 'url(' + imgThumb + ')', width: '100%', height: 450,  backgroundSize: 'cover', backgroundRepeat: 'no-repeat',  backgroundPosition: 'center center' }} />
        <div className='col'>
          <div className='row'>
            <div className='f-l2' />
            <div className='f-l8 text-align-center'>
              <h1 style={{fontSize: '6rem', lineHeight: '5.8rem'}} className='pink-col'>{headline}</h1>
            </div>
            <div className='f-l2' />
          </div>
          <div className='row'>
            <div className='f-l3' />
            <div className='f-l7'>
              {/* TODO: Gör en mappad text istället */}
              <p style={{fontSize: '1.5rem', lineHeight: '2.2rem'}} className='darkgrey-col' dangerouslySetInnerHTML = {{ __html : textLong  }} />
            </div>
            <div className='f-l3' />
          </div>
        </div>
        <div className='row'>
          <div className='f-l2' />
          <div className='f-l8 row' >
            
              <div className='f-l12' style={{ backgroundImage: 'url(' + imgThumb + ')', width: '100%', height: 400,  backgroundSize: 'cover', backgroundRepeat: 'no-repeat',  backgroundPosition: 'center center' }} />
              <div className='f-l1' />
            
              <div className='f-l12' style={{backgroundImage: 'url(' + imgThumb + ')', width: '100%', height: 400,  backgroundSize: 'cover', backgroundRepeat: 'no-repeat',  backgroundPosition: 'center center' }} />
            
          </div>
          <div className='f-l2' />
        </div>
        <div className='row'>
          <div className='f-l2' />
          <div className='row f-l8'>
            <div className='f-s1'><CaseStats title='Färgrymd' array={colorSpace}/></div>
            <div className='f-s1'><CaseStats title='Verktyg' array={tools}/></div>
            <div className='f-s1'><CaseStats title='Uppgifter' array={tasks}/></div>
            <div className='f-s1'><CaseStats title='Uppdragsgivare' array={employer}/></div>
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