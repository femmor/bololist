import {StyleSheet} from 'react-native';

import {colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {},
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 40,
    alignItems: 'center',
    gap: 5,
  },
  footerLink: {
    marginTop: 2,
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
    fontWeight: 600,
  },
});
