import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CaseStats from './CaseStats';

class CasesDetail extends Component {

  render() {
    const {setCase} = this.props;
    if (setCase == null){return null;}
    const {
      imgThumb, headline, textLong, 
      colorSpace, tools, tasks, 
      employer, client, textShort} = setCase;
  
    return (
      <div id='case' className='lightgrey-bg' style={{paddingBottom: 48}} >
        <div  style={{backgroundImage: 'url(https://raw.githubusercontent.com/steffodimfelt/steffodimfelt.github.io/master/static/img/cases/' + imgThumb.img1 + ')', width: '100%', height: 450,  backgroundSize: 'cover', backgroundRepeat: 'no-repeat',  backgroundPosition: 'center center' }} />
        <div   className='col'>
          {/* RUBRIK */}
          <div className='row'>
            <div className='f-l2' />
            <div id='case-title' className='f-l8 text-align-center'>
              <h1 className='pink-col'>{headline}</h1>
              <h6 className='pink-col' >{client}</h6>
            </div>
            <div className='f-l2' />
          </div>
          {/* INGRESS */}
          <div id='case-stats-outer-container' className='row'>
            <div  className='f-s0 f-l2' />
            <div  className='f-s1 f-l8 border-s1-vertical' style={{textAlign: 'center'}}>
              <p  style={{fontSize: '2rem', lineHeight: '2.9rem', display: 'inline-block'}} className='darkgrey-col' >{textShort}</p>
            </div>
            <div className='f-s0 f-l2' />
          </div>
          {/* BILDER */}
          <div className='row' style={{paddingTop: 24}}>
            <div className='f-s0 f-l2' />
            <div id='case-images' className='f-s1 f-l8' > 
              <div className='cover-image' style={{ backgroundImage: 'url(https://raw.githubusercontent.com/steffodimfelt/steffodimfelt.github.io/master/static/img/cases/' + imgThumb.img2 + ')' }} />
              <div className='cover-image' style={{backgroundImage: 'url(https://raw.githubusercontent.com/steffodimfelt/steffodimfelt.github.io/master/static/img/cases/' + imgThumb.img3 + ')' }} />          
            </div>
            <div className='f-s0 f-l2' />
          </div>
          {/* BRÖDTEXT */}
          <div className='row' style={{paddingTop: 24}}>
            <div className='f-s0 f-m2 f-xl3' />
            <div className='f-s1 f-m8 f-xl6 ' id='case-text'>
              {/* TODO: Gör en mappad text istället */}
              <p  style={{fontSize: '1.5rem', lineHeight: '2.2rem'}} className='darkgrey-col' dangerouslySetInnerHTML = {{ __html : textLong  }} />
            </div>
            <div className='f-s0 f-m2 f-xl3' />
          </div>
        </div>
        {/* STATS */}
        <div id='case-stats-outer-container' className='row'>
          <div  className='f-s0 f-l2' />
          <div id='case-stats-container' className='row f-s1 f-l8 border-s1-vertical'>
            <div className='case-stat '><CaseStats title='Färgrymd' array={colorSpace}/></div>
            <div className='case-stat '><CaseStats title='Verktyg' array={tools}/></div>
            <div className='case-stat '><CaseStats title='Uppgifter' array={tasks}/></div>
            <div className='case-stat '><CaseStats title='Uppdragsgivare' array={employer}/></div>
          </div>
          <div className='f-s0 f-l2' />
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
