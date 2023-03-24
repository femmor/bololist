import {useEffect, useState} from 'react';
import {View, Text, TextInput, Pressable, Image} from 'react-native';
import styles from './styles';

import eyeIcon from '../../assets/icons/eye.png';
import eyeOffIcon from '../../assets/icons/hide-eye.png';

const Input = ({label, placeholder, isPassword}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  useEffect(() => {
    if (isPassword) {
      setIsPasswordVisible(false);
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          isPassword={isPassword}
          secureTextEntry={isPassword && !isPasswordVisible}
          togglePasswordVisibility={togglePasswordVisibility}
        />
        {isPassword ? (
          <Pressable
            style={styles.togglePasswordVisibility}
            onPress={togglePasswordVisibility}>
            <Image
              source={isPasswordVisible ? eyeOffIcon : eyeIcon}
              style={styles.eye}
            />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};
export default Input;
