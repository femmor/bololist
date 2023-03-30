import {StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    marginHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    paddingVertical: 10,
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
  cancelIcon: {
    width: 18,
    height: 18,
    marginVertical: 5,
  },
});
