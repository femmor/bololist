import {Pressable, Text, View} from 'react-native';

import styles from './styles';

const AuthFooter = ({titleText, linkText, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.footer}>
        <Text>{titleText}</Text>
        <Pressable style={styles.footerLink} onPress={onPress}>
          <Text>{linkText}</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default AuthFooter;
