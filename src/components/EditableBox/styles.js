import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export default styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: colors.white,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    marginVertical: 12,
    borderRadius: 4,
    elevation: 7,
  },

  titleContainer: {
    gap: 10,
  },

  input: {
    fontSize: 16,
    fontWeight: 'normal',
    color: colors.primary,
    width: '100%',
  },

  label: {
    fontSize: 12,
    fontWeight: 'normal',
    color: colors.textGray,
  },
});
