import {Dimensions, StyleSheet} from 'react-native';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  categoriesList: {
    paddingVertical: 20,
  },
  productList: {
    // paddingHorizontal: 10,
  },
  categoriesListContentContainer: {},
  productListContentContainer: {},
});
