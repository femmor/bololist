import {TouchableOpacity, View, Text, Image} from 'react-native';

import styles from './styles';
import checkIcon from '../../assets/icons/check.png';

const Checkbox = ({checked, onCheck}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={onCheck}>
      <View style={styles.innerContainer}>
        {checked ? <Image source={checkIcon} style={styles.checkIcon} /> : null}
      </View>
    </TouchableOpacity>
  );
};
export default Checkbox;
