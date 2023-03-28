import {StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    height: '100%',
    marginHorizontal: 8,
    alignItems: 'center',
    gap: 5,
  },
  imageContainer: {
    backgroundColor: colors.gray,
    borderRadius: 8,
    marginBottom: 5,
    padding: 5,
  },
  image: {
    height: 35,
    width: 35,
  },

  title: {
    fontSize: 12,
    color: colors.lightGray,
  },
});
