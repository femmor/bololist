import {Dimensions, StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

const {height, width} = Dimensions.get('window');

export default StyleSheet.create({
  image: {
    width: width,
    height: height * 0.5,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 60,
    alignSelf: 'center',
  },
  paginationLine: {
    width: 20,
    height: 4,
    borderRadius: 5,
    backgroundColor: colors.white,
    marginHorizontal: 3,
  },
  activeLine: {
    backgroundColor: colors.primary,
    width: 30,
  },
});
