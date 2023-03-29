import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, ScrollView} from 'react-native';
import {View, Text} from 'react-native';

import styles from './styles';
import {AppHeader, FavoriteItem} from '../../../components';

import {products} from '../../../data/products';

const Favorite = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <AppHeader title="Favorites" />
        <FlatList
          data={products}
          renderItem={({item}) => <FavoriteItem product={item} />}
          keyExtractor={item => item?.id.toString()}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
export default Favorite;
