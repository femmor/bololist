import {Dimensions, StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    height: '100%',
    marginHorizontal: 8,
  },
  image: {
    width: (width - 52) / 2,
    height: 200,
    borderRadius: 8,
    marginVertical: 5,
  },

  title: {
    fontSize: 12,
    fontWeight: 500,
    color: colors.textGray,
    paddingVertical: 5,
  },
  price: {
    fontSize: 12,
    fontWeight: 700,
    color: colors.black,
    paddingBottom: 15,
  },
});
