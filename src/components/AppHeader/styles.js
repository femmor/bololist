import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  image: {
    width: 18,
    height: 18,
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    textAlign: 'center',
    flex: 1,
    color: colors.darkGray,
  },
});
