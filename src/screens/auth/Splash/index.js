import {Image, Text, View} from 'react-native';

import styles from './styles';
import splashImg from '../../../assets/images/splash-screen.png';

const Splash = () => {
  return (
    <View style={styles.container}>
      <Image source={splashImg} style={styles.splashImg} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>You'll find</Text>
        <Text style={styles.textHighlight}>All you need</Text>
        <Text style={styles.text}>Here!</Text>
      </View>
    </View>
  );
};
export default Splash;
