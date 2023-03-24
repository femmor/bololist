import {View} from 'react-native';
import styles from './styles';

import {AuthHeader, Input} from '../../../components';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <AuthHeader title="Sign Up" onBackPress={() => {}} />
      <Input label="Email" placeholder="Enter your email" type="text" />
      <Input label="Name" placeholder="Enter your name" type="text" />
      <Input label="Password" placeholder="********" isPassword />
    </View>
  );
};
export default SignUp;
