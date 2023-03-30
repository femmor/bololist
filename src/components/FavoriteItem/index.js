import {Image, Pressable, Text, View} from 'react-native';

import styles from './styles';

const FavoriteItem = ({item, onPress, icon, onIconPress}) => {
  const {title, image, price} = item;

  const onCancelPress = () => {
    console.log('cancel pressed');
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View style={styles.content}>
          <Image
            source={{
              uri: image,
            }}
            style={styles.image}
          />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
          </View>
        </View>
      </Pressable>
      <Pressable onPress={onIconPress}>
        <Image source={icon} style={styles.cancelIcon} />
      </Pressable>
    </View>
  );
};
export default FavoriteItem;
