import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { FILM, PRINT, WEB, PHOTO, THREE_D, OTHER, EVENT, MOBILE, EVERYTHING } from '../CategoriesConstants.js';
import {pickCategory} from '../actions';

class CategoriesList extends Component {

  state = {selectedCategoryState: this.props.selectedCategory === null ? EVERYTHING : this.props.selectedCategory.category}

  render() {
    const setSelectedCategory = (valueIn) => {
      this.setState({selectedCategoryState: valueIn});
      this.props.pickCategory(this.props.categories[valueIn]);
    };
 
    const categorySwitch = title => {
      switch(title) {
      case FILM: return 'Film';
      case PRINT: return 'Print';
      case WEB: return 'Webb';
      case PHOTO: return 'Foto';
      case THREE_D: return '3D';
      case OTHER: return 'Övrigt';
      case EVENT: return 'Event';
      case MOBILE: return 'Mobil';
      case EVERYTHING: return 'Allting';
      default: return 'Allting';
      }
    };

    const CategoryList = () => {
      return this.props.categoryArray
        .map(value => {
          const styles = this.state.selectedCategoryState === value 
            ? 'case-list-item-categories text-align-right lightgrey-col purple-bg' 
            : 'case-list-item-categories text-align-right lightgrey-col pink-bg';
          return (
            <div
              key={value} 
              onClick={() => setSelectedCategory(value)}
              className={styles}
            >
              <p>
                {categorySwitch(value)}
              </p>
            </div>
          );
        });
    };

    return (
      <div className='p-v-s76-s60 p-r-s12'>
        <CategoryList />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return{
    categories: state.caseReducers.categories,
    categoryArray: state.caseReducers.categoryArray,
    selectedCategory: state.selectedCategory,
    casesData: state.casesData,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators({pickCategory}, dispatch);
}
  
CategoriesList.propTypes = {
  categories: PropTypes.object.isRequired,
  categoryArray: PropTypes.array.isRequired,
  pickCategory: PropTypes.func.isRequired,
  selectedCategory: PropTypes.array,
  casesData: PropTypes.array.isRequired,
};
  
export default connect(mapStateToProps, matchDispatchToProps)(CategoriesList);