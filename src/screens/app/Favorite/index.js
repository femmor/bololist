import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, ScrollView} from 'react-native';
import {View, Text} from 'react-native';

import styles from './styles';
import {AppHeader, FavoriteItem} from '../../../components';

import {products} from '../../../data/products';
import cancelIcon from '../../../assets/icons/cancel_outline.png';
import backIcon from '../../../assets/icons/back_outline.png';

const Favorite = ({navigation}) => {
  const renderFavoriteProduct = ({item}) => {
    const onProductPress = () => {
      navigation.navigate('ProductDetails', {product: item});
    };

    const onCancelPress = () => {
      console.log('Cancel pressed');
    };

    return (
      <FavoriteItem
        item={item}
        onPress={onProductPress}
        icon={cancelIcon}
        onIconPress={onCancelPress}
      />
    );
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AppHeader
          title="Favorites"
          showLeftIcon
          leftIcon={backIcon}
          leftIconPress={() => navigation.goBack()}
        />
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
