import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import {Button} from '../../../components';

import styles from './styles';
import redHeart from '../../../assets/icons/heart_red.png';
import heart from '../../../assets/icons/heart_outline.png';
import backIcon from '../../../assets/icons/chevron_left.png';
import {useState} from 'react';

const ProductDetails = ({navigation, route}) => {
  const {product} = route?.params || {};
  const {title, image, price, desc} = product;

  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>{price}</Text>
          <Text style={styles.desc}>{desc}</Text>
        </View>
        <Pressable
          style={styles.backContainer}
          onPress={() => navigation.goBack()}>
          <Image source={backIcon} style={styles.back} />
        </Pressable>
      </ScrollView>
      <View style={styles.footer}>
        <Pressable
          style={styles.favorite}
          onPress={() => setIsFavorite(!isFavorite)}>
          <Image source={isFavorite ? redHeart : heart} style={styles.heart} />
        </Pressable>
        <Button
          title="Contact Seller"
          onPress={() => console.log('Contact Seller')}
        />
      </View>
    </SafeAreaView>
  );
};
export default ProductDetails;
