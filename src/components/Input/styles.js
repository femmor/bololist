import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export default styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: 500,
    marginVertical: 8,
    color: colors.primary,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.lightGray,
    paddingHorizontal: 8,
    paddingVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  eye: {
    tintColor: colors.gray,
    marginRight: 8,
  },
});
