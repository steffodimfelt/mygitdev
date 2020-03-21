import React from 'react';
import PropTypes from 'prop-types';

const CaseStats = ({title, array}) => {
  return (
    <div>
      <h2 style={{marginBottom: -2}} className='pink-col'>{title}</h2>
      {
        array.map((value, index) => {
          return (
            <p key={index} className='darkgrey-col' style={{fontSize: '1.1rem', lineHeight: '0.6rem'}}>{value}</p>
          );
        })
      }
    </div>
  );
};

CaseStats.propTypes = {
  array: PropTypes.array,
  title: PropTypes.string
};
CaseStats.defaultProps = {
  array: null,
  title: null
};

export default CaseStats;
