import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    margin: 10,
    paddingVertical: 16,
    paddingHorizontal: 10,
    borderRadius: 8,
    backgroundColor: colors.primary,
    width: '100%',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: colors.white,
  },
});
