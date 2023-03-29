import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, ScrollView, Image, Pressable} from 'react-native';

import styles from './styles';

import backIcon from '../../../assets/icons/back.png';

const ProductDetails = ({navigation, route}) => {
  const {product} = route?.params || {};
  const {title, image, price} = product;

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Pressable onPress={() => navigation.goBack()}>
          <Image source={backIcon} />
        </Pressable>
        <Text>{title}</Text>
      </View>
    </SafeAreaView>
  );
};
export default ProductDetails;
