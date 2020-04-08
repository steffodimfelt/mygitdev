import React from 'react';
import PropTypes from 'prop-types';

const LinkIcons = ({link}) => {
  const PickIcon = () =>{
    if (!link){return null;}
    return (
      link.map(value => {
        switch(value.icon) {
        case 'apple': return <a href={value.url} key={value.title} style={{textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img style={{width: '2.5rem'}} src={require('../img/icons/apple.png')} alt='Apple'/><h4 className='purple-col' style={{marginLeft: '0.8rem', fontSize: '1.5rem', display:'inline'}}>{value.title}</h4></a>;
        case 'codepen': return <a href={value.url} key={value.title} style={{textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img style={{width: '2.5rem'}} src={require('../img/icons/codepen.png')} alt='Codepen'/><h4 className='purple-col' style={{marginLeft: '0.8rem', fontSize: '1.5rem', display:'inline'}}>{value.title}</h4></a>;
        case 'github': return <a href={value.url} key={value.title} style={{textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img style={{width: '2.5rem'}} src={require('../img/icons/github.png')} alt='Github'/><h4 className='purple-col' style={{marginLeft: '0.8rem', fontSize: '1.5rem', display:'inline'}}>{value.title}</h4></a>;
        case 'google': return <a href={value.url} ey={value.title} style={{textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img style={{width: '2.5rem'}} src={require('../img/icons/google.png')} alt='Google'/><h4 className='purple-col' style={{marginLeft: '0.8rem', fontSize: '1.5rem', display:'inline'}}>{value.title}</h4></a>;
        case 'web': return <a href={value.url} key={value.title} style={{textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img style={{width: '2.5rem'}} src={require('../img/icons/web.png')} alt='Web'/><h4 className='purple-col' style={{marginLeft: '0.8rem', fontSize: '1.5rem', display:'inline'}}>{value.title}</h4></a>;
        case 'vimeo': return <a href={value.url} key={value.title} style={{textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img style={{width: '2.5rem'}} src={require('../img/icons/vimeo.png')} alt='Web'/><h4 className='purple-col' style={{marginLeft: '0.8rem', fontSize: '1.5rem', display:'inline'}}>{value.title}</h4></a>;
        case 'xd': return <a href={value.url} key={value.title} style={{textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img style={{width: '2.5rem'}} src={require('../img/icons/xd.png')} alt='Xd'/><h4 className='purple-col' style={{marginLeft: '0.8rem', fontSize: '1.5rem', display:'inline'}}>{value.title}</h4></a>;
        case 'youtube': return <a href={value.url} key={value.title} style={{textDecoration: 'none', display: 'flex', justifyContent: 'center', alignItems: 'center'}}><img style={{width: '2.5rem'}} src={require('../img/icons/youtube.png')} alt='Web'/><h4 className='purple-col' style={{marginLeft: '0.8rem', fontSize: '1.5rem', display:'inline'}}>{value.title}</h4></a>;
        default: return null;
        }
      })
    );
  };

  return (    
    <PickIcon />
  );
};


LinkIcons.propTypes = {
  link: PropTypes.array,
};

export default LinkIcons;