import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import CaseStats from './CaseStats';

class CasesDetail extends Component {
  constructor(props){
    super(props);
    this.state = {toggleImg: false, caseImage: ''};
  }
  



  render() {
    const {setCase} = this.props;
    if (setCase == null){return null;}
    const {
      imgThumb, headline, textLong, 
      colorSpace, tools, tasks, 
      employer, client, textShort} = setCase;

    const setToggleImg = caseImage => {
      this.props.doubleToggleFunction(true);
      this.setState(prevState => ({toggleImg: !prevState.toggleImg, caseImage}));
    };

    const FullImage = () => {
      console.log("doubleToggle", this.props.doubleToggle);
      // console.log('toggleImg', this.state.toggleImg)
      if (!this.props.doubleToggle){return null;}
      return (
        <div className='pointer full-screen black-alpha-trans-bg' style={{display: 'flex', position:'fixed', top: 0}} onClick={() => setToggleImg()}>
          <img 
            className='img-max center-center'
            alt={this.state.caseImage} 
            src={'https://raw.githubusercontent.com/steffodimfelt/steffodimfelt.github.io/master/static/img/cases/' + this.state.caseImage} />
        
          <div className='row' style={{justifyContent: 'flex-end', height: '100%', paddingRight: '3rem'}}>
            <div id='menu' 
              className='menu-style-close-img m-s24 pointer purple-bg shadow-1'
            >
              <img alt='Close button' src={require('../img/icons/close.svg')} style={{width: '2rem'}} />
            </div>
          </div>
        </div>
      );
    };

    const Zoom = () => {
      return (
        <div className='row' style={{justifyContent: 'flex-end', height: '100%', paddingRight: '1rem', paddingBottom: '1rem'}}>
          <div  
            className='zoom-button-style pointer purple-bg shadow-1 ' style={{alignSelf: 'flex-end'}}
          >
            <img alt='Close button' src={require('../img/icons/zoom.svg')} style={{width: '1.7rem'}} />
          </div>
        </div>

      );
    };
  
    return (
      <div id='case' className='lightgrey-bg' style={{paddingBottom: 48}} >
        <div onClick={() => setToggleImg(imgThumb.img1)} className='pointer' style={{backgroundImage: 'url(https://raw.githubusercontent.com/steffodimfelt/steffodimfelt.github.io/master/static/img/cases/' + imgThumb.img1 + ')', width: '100%', height: 450,  backgroundSize: 'cover', backgroundRepeat: 'no-repeat',  backgroundPosition: 'center center' }} />
        <div className='col'>
          {/* RUBRIK */}
          <div className='row'>
            <div className='f-l2' />
            <div id='case-title' className='f-l8 text-align-center p-t-s24 '>
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
          <div className='row' style={{display: 'flex', paddingTop: 24}}>
            <div className='f-s0 f-l2' />
            <div id='case-images' className='f-s1 f-l8' > 
              <div 
                onClick={() => setToggleImg(imgThumb.img2)}
                className='cover-image pointer' 
                style={{ height: '100%', backgroundImage: 'url(https://raw.githubusercontent.com/steffodimfelt/steffodimfelt.github.io/master/static/img/cases/' + imgThumb.img2 + ')' }} >
                <Zoom onClick={() => this.setToggleImg(imgThumb.img2)} />
              </div>
              <div 
                onClick={() => setToggleImg(imgThumb.img3)}
                className='cover-image pointer' 
                style={{backgroundImage: 'url(https://raw.githubusercontent.com/steffodimfelt/steffodimfelt.github.io/master/static/img/cases/' + imgThumb.img3 + ')' }} >
                <Zoom onClick={() => this.setToggleImg(imgThumb.img3)} />
              </div>          
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
          <div  className='f-s0 f-m2 ' />
          <div id='case-stats-container' className='row f-s6 f-m8  border-s1-vertical'>
            <div className='case-stat '><CaseStats title='Färgrymd' array={colorSpace}/></div>
            <div className='case-stat '><CaseStats title='Verktyg' array={tools}/></div>
            <div className='case-stat '><CaseStats title='Uppgifter' array={tasks}/></div>
            <div className='case-stat '><CaseStats title='Uppdragsgivare' array={employer}/></div>
          </div>
          <div className='f-s0 f-m2 ' />
        </div>
        {this.state.toggleImg ? <FullImage /> : null}
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log('state.caseReducers.toggleMenu', state.caseReducers.toggleMenu)
  return {
    setCase: state.setCaseDetails,
    toggle: state.caseReducers.toggleMenu,
  };
}
CasesDetail.propTypes = {
  setCase: PropTypes.object,
  style: PropTypes.object,
  toggle: PropTypes.bool.isRequired,
  doubleToggleFunction: PropTypes.func,
  doubleToggle: PropTypes.bool,
};
CasesDetail.defaultProps = {
  setCase: null
};

export default connect(mapStateToProps)(CasesDetail);
