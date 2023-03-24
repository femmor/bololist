import {Pressable, Text, View} from 'react-native';
import {useState} from 'react';
import styles from './styles';

import {
  AuthHeader,
  Button,
  Checkbox,
  Input,
  Separator,
} from '../../../components';

const SignUp = () => {
  const [checked, setChecked] = useState(false);

  const onCheck = () => {
    setChecked(!checked);
  };

  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" onBackPress={() => {}} />
      <Input label="Email" placeholder="Enter your email" type="text" />
      <Input label="Name" placeholder="Enter your name" type="text" />
      <Input label="Password" placeholder="********" isPassword />
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
    </View>
  );
};
export default SignUp;
