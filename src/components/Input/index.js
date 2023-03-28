import {useState} from 'react';
import {View, Text, TextInput, Pressable, Image} from 'react-native';
import styles from './styles';

import eyeIcon from '../../assets/icons/eye.png';
import eyeOffIcon from '../../assets/icons/hide-eye.png';

const Input = ({
  label,
  placeholder,
  isPassword,
  showLabel,
  value,
  onChangeText,
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      {showLabel ? <Text style={styles.label}>{label}</Text> : null}
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          isPassword={isPassword}
          secureTextEntry={isPassword && !isPasswordVisible}
          togglePasswordVisibility={togglePasswordVisibility}
          value={value}
          onChangeText={onChangeText}
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
