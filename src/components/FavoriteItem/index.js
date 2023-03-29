import {Image, Pressable, Text, View} from 'react-native';

import styles from './styles';
import deleteIcon from '../../assets/icons/delete.png';

const FavoriteItem = ({item, onPress}) => {
  const {title, image, price} = item;

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
      <Pressable onPress={() => console.log('delete pressed')}>
        <Image source={deleteIcon} style={styles.deleteIcon} />
      </Pressable>
    </View>
  );
};
export default FavoriteItem;
