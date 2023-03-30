import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, ScrollView} from 'react-native';
import {View, Text} from 'react-native';

import styles from './styles';
import {AppHeader, FavoriteItem} from '../../../components';

import {products} from '../../../data/products';
import deleteIcon from '../../../assets/icons/delete.png';

const MyListings = ({navigation}) => {
  const renderFavoriteProduct = ({item}) => {
    const onProductPress = () => {
      navigation.navigate('ProductDetails', {product: item});
    };

    const onDeletePress = () => {
      console.log('Delete pressed');
    };

    return (
      <FavoriteItem
        item={item}
        onPress={onProductPress}
        icon={deleteIcon}
        onIconPress={onDeletePress}
      />
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AppHeader title="My Listings" />
        <FlatList
          data={products}
          renderItem={renderFavoriteProduct}
          keyExtractor={item => item?.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};
export default MyListings;
