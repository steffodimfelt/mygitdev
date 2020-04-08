import React from 'react';
import PropTypes from 'prop-types';

const LinkIcons = ({link}) => {
    console.log("link", link)
  const PickIcon = () => {
    return link.map(value => {

      switch(value.icon) {
      case 'apple': return <img src={require('../img/icons/apple.png')} alt='Google'/>;
      case 'codepen': return <img src={require('../img/icons/codepen.png')} alt='Codepen'/>;
      case 'github': return <img src={require('../img/icons/github.png')} alt='Github'/>;
      case 'google': return <img src={require('../img/icons/google.png')} alt='Google'/>;
      case 'web': return <img src={require('../img/icons/web.png')} alt='Web'/>;
      default: return null;
      }
    });
  };

  return (
    <PickIcon />
  );
};

LinkIcons.propTypes = {
  link: PropTypes.array,
};

export default LinkIcons;