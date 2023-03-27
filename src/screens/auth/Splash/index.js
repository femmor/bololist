import {Image, Pressable, Text, View} from 'react-native';
import {Button} from '../../../components';

import styles from './styles';
import splashImg from '../../../assets/images/splash-screen.png';

const Splash = () => {
  const onSignIn = () => {
    console.log('Sign in Pressed');
  };
  const onSignUp = () => {
    console.log('Sign up Pressed');
  };

  return (
    <View style={styles.container}>
      <Image source={splashImg} style={styles.splashImg} />
      <View style={styles.titleContainer}>
        <Text style={styles.text}>You'll find</Text>
        <Text style={styles.textHighlight}>All you need</Text>
        <Text style={styles.text}>Here!</Text>
      </View>
      <Button title="Sign In" onPress={onSignIn} />
      <Pressable
        hitSlop={10}
        onPress={onSignUp}
        style={{
          marginTop: 10,
        }}>
        <Text style={styles.footerText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};
export default Splash;
