import {View, Text, Pressable, Image} from 'react-native';

import styles from './styles';

const AppHeader = ({
  title,
  leftIconPress,
  rightIconPress,
  leftIcon,
  rightIcon,
  showLeftIcon,
  showRightIcon,
  iconOnly,
}) => {
  return (
    <View style={styles.container}>
      {showLeftIcon ? (
        <Pressable onPress={leftIconPress}>
          <Image source={leftIcon} style={styles.image} />
        </Pressable>
      ) : null}
      {iconOnly ? null : <Text style={styles.title}>{title}</Text>}
      {showRightIcon ? (
        <Pressable onPress={rightIconPress}>
          <Image source={rightIcon} style={styles.image} />
        </Pressable>
      ) : null}
    </View>
  );
};
export default AppHeader;
