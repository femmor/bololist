import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const Button = ({title, onPress, style}) => {
  return (
    <TouchableOpacity
      style={[styles.container, style]}
      onPress={onPress}
      activeOpacity={0.5}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
