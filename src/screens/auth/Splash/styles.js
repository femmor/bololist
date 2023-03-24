import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 10,
  },
  splashImg: {
    width: '100%',
    height: 300,
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  textContainer: {
    alignItems: 'center',
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#000',
  },

  textHighlight: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffa62b',
    textDecorationLine: 'underline',
  },
});
