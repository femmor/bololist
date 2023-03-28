import {Pressable, ScrollView, Text, View} from 'react-native';
import {useState} from 'react';
import styles from './styles';

import {
  AuthFooter,
  AuthHeader,
  Button,
  Checkbox,
  GoogleLogin,
  Input,
  Separator,
} from '../../../components';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignUp = ({navigation}) => {
  const [checked, setChecked] = useState(false);

  const onCheck = () => {
    setChecked(!checked);
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <AuthHeader title="Sign Up" onPress={() => navigation.goBack()} />
          <Input
            label="Email"
            placeholder="Enter your email"
            type="text"
            showLabel
          />
          <Input
            label="Name"
            placeholder="Enter your name"
            type="text"
            showLabel
          />
          <Input label="Password" placeholder="********" isPassword showLabel />
          <View style={styles.termsContainer}>
            <Checkbox checked={checked} onCheck={onCheck} />
            <View style={styles.terms}>
              <Text>I agree with the</Text>
              <Pressable
                style={styles.termsText}
                onPress={() => console.log('terms and privacy pressed!')}>
                <Text>Terms and Privacy.</Text>
              </Pressable>
            </View>
          </View>
          <Button
            title="Sign Up"
            onPress={() => console.log('sign up button pressed!')}
            style={{
              marginVertical: 20,
            }}
          />
          <Separator title="Or sign up with" />
          <GoogleLogin />

          <AuthFooter
            titleText="Already have an account?"
            linkText="Sign In"
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default SignUp;
