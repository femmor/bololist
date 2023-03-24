import {StyleSheet} from 'react-native';
import {colors} from '../../../utils/colors';

export default StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
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
    color: colors.gray,
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
