import React from 'react';
import CasesList from './CasesList';

const CaseMenu = () => {
  return (
    <div className='row' >
      <div className='row fixed-top w-100-per f-s12 h-20-rem purple-bg overflow-auto'>
        <div className='f-s3'></div>
        <div className='f-s3 f-m2 p-v-s24'>MENY</div>
        <div className='f-s6 f-m7'>
          <CasesList />
        </div> 
      </div>
    </div>
  );
};

export default CaseMenu;