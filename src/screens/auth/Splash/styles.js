import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  splashImg: {
    width: '100%',
    height: 250,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  titleContainer: {
    alignItems: 'center',
    marginVertical: 54,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.darkGray,
  },

  textHighlight: {
    fontSize: 40,
    fontWeight: 'bold',
    color: colors.orange,
    textDecorationLine: 'underline',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.primary,
    marginTop: 10,
    textAlign: 'center',
  },
});
