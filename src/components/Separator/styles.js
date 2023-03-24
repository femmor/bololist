import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export default styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
    gap: 10,
  },
  separatorIcon: {
    flex: 1,
  },
  separatorText: {
    flex: 1,
    textAlign: 'center',
    color: colors.primary,
  },
});
