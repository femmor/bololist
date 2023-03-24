import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export default StyleSheet.create({
  container: {
    height: '100%',
  },
  termsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
  terms: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  termsText: {
    marginTop: 2,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    fontWeight: 600,
  },
});
