import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, ScrollView} from 'react-native';

import styles from './styles';

const ProductDetails = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Product Details</Text>
      </View>
    </SafeAreaView>
  );
};
export default ProductDetails;
