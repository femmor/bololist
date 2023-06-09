import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {Button} from '../../../components';

import styles from './styles';
import splashImg from '../../../assets/images/splash-screen.png';
import {SafeAreaView} from 'react-native-safe-area-context';

const Splash = ({navigation}) => {
  const onSignIn = () => {
    navigation.navigate('SignIn');
  };
  const onSignUp = () => {
    navigation.navigate('SignUp');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <Image source={splashImg} style={styles.splashImg} />
          <View style={styles.titleContainer}>
            <Text style={styles.text}>You'll find</Text>
            <Text style={styles.textHighlight}>All you need</Text>
            <Text style={styles.text}>Here!</Text>
          </View>
          <View
            style={{
              width: '100%',
              flexDirection: 'row',
            }}>
            <Button title="Sign In" onPress={onSignIn} />
          </View>
          <Pressable
            hitSlop={10}
            onPress={onSignUp}
            style={{
              marginTop: 10,
            }}>
            <Text style={styles.footerText}>Sign Up</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Splash;
