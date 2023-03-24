import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    borderColor: colors.lightGray,
    width: 22,
    height: 22,
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 5,
    width: '100%',
    height: '100%',
  },
  checkIcon: {
    width: 12,
    height: 9,
  },
});
