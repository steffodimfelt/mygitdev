import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { FILM, PRINT, WEB, PHOTO, THREE_D, OTHER, EVENT, MOBILE, EVERYTHING } from '../CategoriesConstants.js';

class CategoriesList extends Component {
  render() {
    const categorySwitch = title => {
      switch(title) {
      case FILM: return 'Film';
      case PRINT: return 'Print';
      case WEB: return 'Webb';
      case PHOTO: return 'Foto';
      case THREE_D: return '3D';
      case OTHER: return 'Övrigt';
      case EVENT: return 'Event';
      case MOBILE: return 'Mobilt';
      case EVERYTHING: return 'Allting';
      }
    };

    const CategoryList = () => {
      console.log(this.props.categoryArray)
      return this.props.categoryArray
        .map(value => {
          return (<p key={value} className='case-list-item-categories text-align-right lightgrey-col'>{categorySwitch(value)}</p>)
        });
    };

    return (
      <div className='p-v-s24-s60 p-r-s24'>
        <CategoryList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log("state.caseReducers", state.caseReducers);
  return{
    categories: state.caseReducers.categories,
    categoryArray: state.caseReducers.categoryArray,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}
  
CategoriesList.propTypes = {
  categories: PropTypes.object.isRequired,
  categoryArray: PropTypes.array.isRequired,
};
  
export default connect(mapStateToProps, matchDispatchToProps)(CategoriesList);
