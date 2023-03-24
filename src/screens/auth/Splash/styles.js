import {StyleSheet} from 'react-native';

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
    color: '#000',
  },

  textHighlight: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#ffa62b',
    textDecorationLine: 'underline',
  },
  footerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#489fb5',
    marginTop: 10,
    textAlign: 'center',
  },
});
