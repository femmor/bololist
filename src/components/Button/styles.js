import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: colors.primary,
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
  },
});
