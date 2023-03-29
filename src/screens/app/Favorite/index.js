import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, ScrollView} from 'react-native';
import {View, Text} from 'react-native';

import styles from './styles';
import {AppHeader, FavoriteItem} from '../../../components';

import {products} from '../../../data/products';

const Favorite = ({navigation}) => {
  const renderFavoriteProduct = ({item}) => {
    const onProductPress = () => {
      navigation.navigate('ProductDetails', {product: item});
    };

    return <FavoriteItem item={item} onPress={onProductPress} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AppHeader title="Favorites" />
        <FlatList
          data={products}
          renderItem={renderFavoriteProduct}
          keyExtractor={item => item?.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
export default Favorite;
