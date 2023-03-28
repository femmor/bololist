import {ScrollView, View} from 'react-native';
import styles from './styles';

import {
  AuthFooter,
  AuthHeader,
  Button,
  GoogleLogin,
  Input,
  Separator,
} from '../../../components';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignIn = ({navigation}) => {
  const onSignIn = () => {
    console.log('sign in button pressed!');
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <AuthHeader title="Sign In" onPress={() => navigation.goBack()} />
          <Input label="Email" placeholder="Enter your email" type="text" />
          <Input label="Password" placeholder="********" isPassword />

          <Button
            title="Sign In"
            onPress={() => console.log('sign in button pressed!')}
            style={{
              marginVertical: 20,
            }}
          />
          <Separator title="Or sign up with" />
          <GoogleLogin />

          <AuthFooter
            titleText="Don't have an account?"
            linkText="Sign Up"
            onPress={() => navigation.navigate('signup')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignIn;
