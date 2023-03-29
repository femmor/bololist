import {Image, Pressable, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const ProductHomeItem = ({item, onPress}) => {
  const {title, image, price} = item;

  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>{price}</Text>
    </Pressable>
  );
};
export default ProductHomeItem;
