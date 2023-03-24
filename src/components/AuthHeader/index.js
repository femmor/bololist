import {View, Text, Pressable, Image} from 'react-native';

import backIcon from '../../assets/icons/back.png';
import styles from './styles';

const AuthHeader = ({title, onBackPress}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBackPress}>
        <Image source={backIcon} style={styles.image} />
      </Pressable>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default AuthHeader;
