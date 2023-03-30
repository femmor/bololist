import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  image: {
    width: 20,
    height: 20,
  },
  title: {
    fontSize: 14,
    fontWeight: 600,
    textAlign: 'center',
    flex: 1,
    color: colors.darkGray,
  },
  rightIcon: {
    marginRight: 10,
  },
});
