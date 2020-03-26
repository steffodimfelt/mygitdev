import React from 'react';
import CasesList from './CasesList';
import CategoriesList from './CategoriesList';

const CaseMenu = () => {

  return (
    <div className='row' >
      <div className='row fixed-top w-100-per f-s12 full-screen pink-bg overflow-auto'>
        
        
        <div className='f-s6 f-m4 lightgrey-col'>
          <CategoriesList />
        </div>
        <div className='f-s6 f-m8 '>
          <CasesList />
        </div> 
      </div>
    </div>
  );
};

export default CaseMenu;