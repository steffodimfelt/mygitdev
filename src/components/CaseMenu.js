import React from 'react';
import CasesList from './CasesList';
import PropTypes from 'prop-types';

const CaseMenu = ({categories}) => {
  console.log("categories", categories);
  return (
    <div className='row' >
      <div className='row fixed-top w-100-per f-s12 full-screen pink-bg overflow-auto'>
        <div className='f-s3'></div>
        <div className='f-s3 f-m2 p-v-s24 lightgrey-col'></div>
        {/* <div className='f-s3 f-m2 p-v-s24 lightgrey-col'><h2>ALLA</h2></div> */}
        <div className='f-s6 f-m7 '>
          <CasesList />
        </div> 
      </div>
    </div>
  );
};

CaseMenu.propTypes = {
  categories: PropTypes.object.isRequired,
};
export default CaseMenu;