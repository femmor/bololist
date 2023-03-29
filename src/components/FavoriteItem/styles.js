import {Dimensions, StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

const {width} = Dimensions.get('screen');

export default StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  content: {
    flexDirection: 'row',
    gap: 20,
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
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
  textContainer: {
    gap: 3,
  },
  deleteIcon: {
    width: 20,
    height: 20,
  },
});
