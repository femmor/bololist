import {View, Text, Pressable, Image} from 'react-native';

import backIcon from '../../assets/icons/back.png';
import styles from './styles';

const AuthHeader = ({title, onPress}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Image source={backIcon} style={styles.image} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default AuthHeader;
