import React from 'react';
import PropTypes from 'prop-types';

const CaseStats = ({title, array}) => {
  return (
    <div>
      <h4 style={{marginBottom: -2}} >{title}</h4>
      {
        array.map((value, index) => {
          return (
            <p key={index} style={{fontSize: 13, lineHeight: 0.5}}>{value}</p>
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
