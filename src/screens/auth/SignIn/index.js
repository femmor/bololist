import {View} from 'react-native';
import styles from './styles';

import {
  AuthFooter,
  AuthHeader,
  Button,
  GoogleLogin,
  Input,
  Separator,
} from '../../../components';

const SignIn = () => {
  const onSignIn = () => {
    console.log('sign in button pressed!');
  };

  return (
    <View style={styles.container}>
      <AuthHeader
        title="Sign In"
        onBackPress={() => console.log('back icon pressed!')}
      />
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
        onPress={() => console.log('sign up link pressed!')}
      />
    </View>
  );
};
export default SignIn;
