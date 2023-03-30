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
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 12,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: 'normal',
    color: colors.textGray,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    justifyContent: 'space-between',
  },
  editIcon: {
    width: 20,
    height: 20,
  },

  helpCenter: {
    marginTop: 40,
  },
});
