import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export default styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginHorizontal: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    marginVertical: 8,
    color: colors.textGray,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.primary,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
    color: colors.textGray,
  },
  eye: {
    tintColor: colors.gray,
    marginRight: 8,
  },
});
