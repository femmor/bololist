import {TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const Button = ({title, onButtonPress}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onButtonPress}
      activeOpacity={0.5}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
export default Button;
