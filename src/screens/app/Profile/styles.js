import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

const {height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  buttonContainer: {},
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 12,
  },
  email: {
    fontSize: 14,
    fontWeight: 'normal',
    color: colors.textGray,
  },
});
