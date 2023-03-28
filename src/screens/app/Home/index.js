import {useState, useRef, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, Image, ScrollView} from 'react-native';
import {View, Text} from 'react-native';

import styles from './styles';
import {AppHeader, Category, Input, ProductHomeItem} from '../../../components';
import searchIcon from '../../../assets/icons/search.png';

import {categories} from '../../../data/categories';
import {products} from '../../../data/products';

const Home = ({navigation}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  const renderCategoryItem = ({item}) => {
    return (
      <Category
        item={item}
        onPress={() => setSelectedCategory(item?.id)}
        isSelected={item?.id === selectedCategory}
      />
    );
  };

  const renderProductItem = ({item}) => {
    return <ProductHomeItem item={item} />;
  };

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <AppHeader
            title="Find All You Need"
            leftIconPress={toggleSearchInput}
            leftIcon={searchIcon}
            showLeftIcon
          />
          <View style={styles.searchInputContainer}>
            {showSearchInput ? (
              <Input placeholder="Search for items and more..." />
            ) : null}
          </View>
          <FlatList
            data={categories}
            renderItem={renderCategoryItem}
            keyExtractor={(item, idx) => idx.toString()}
            style={styles.categoriesList}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.categoriesListContentContainer}
          />
          <FlatList
            data={products}
            renderItem={renderProductItem}
            keyExtractor={(item, idx) => idx.toString()}
            style={styles.productList}
            numColumns={2}
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.productListContentContainer}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
