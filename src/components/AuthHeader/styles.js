import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginTop: 30,
    marginBottom: 50,
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
