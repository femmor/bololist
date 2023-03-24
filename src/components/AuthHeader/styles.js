import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    gap: 16,
  },
  image: {
    width: 18,
    height: 18,
  },
  title: {
    fontSize: 26,
    fontWeight: 500,

    color: colors.primary,
  },
});
