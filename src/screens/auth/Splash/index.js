import {Image, Pressable, Text, View} from 'react-native';
import {Button} from '../../../components';

import styles from './styles';
import splashImg from '../../../assets/images/splash-screen.png';

const Splash = () => {
  const onButtonPress = () => {
    console.log('Button Pressed');
  };
  const onSignUp = () => {
    console.log('Link Pressed');
  };

  return (
    <View style={styles.container}>
      <Image source={splashImg} style={styles.splashImg} />
      <View style={styles.titleContainer}>
        <Text style={styles.text}>You'll find</Text>
        <Text style={styles.textHighlight}>All you need</Text>
        <Text style={styles.text}>Here!</Text>
      </View>
      <Button title="Test Button" onButtonPress={onButtonPress} />
      <Pressable hitSlop={10} onPress={onSignUp}>
        <Text style={styles.footerText}>Sign Up</Text>
      </Pressable>
    </View>
  );
};
export default Splash;
