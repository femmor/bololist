import {StyleSheet, Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

import {colors} from '../../../utils/colors';

export default StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: height * 0.5,
  },
  content: {
    paddingHorizontal: 24,
    backgroundColor: colors.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginTop: -40,
  },
  title: {
    marginTop: 40,
    fontSize: 24,
    fontWeight: 500,
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  desc: {
    fontSize: 12,
    fontWeight: 300,
    color: colors.textGray,
    marginVertical: 8,
  },
  footer: {
    padding: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 12,
    shadowColor: colors.black,
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  favorite: {
    backgroundColor: colors.gray,
    padding: 11,
    borderRadius: 8,
  },
  heart: {
    width: 30,
    height: 30,
  },

  backContainer: {
    position: 'absolute',
    top: 30,
    left: 20,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 4,
    backgroundColor: colors.white,
  },

  back: {},
});
