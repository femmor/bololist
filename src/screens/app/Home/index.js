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
  const [filteredProduct, setFilteredProduct] = useState(products);
  const [keyword, setKeyword] = useState('');

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

  const onSearch = text => {
    setKeyword(text);
  };

  // Filter products by category and keyword
  useEffect(() => {
    const updateProducts = products.filter(
      product =>
        product?.category === selectedCategory &&
        product?.title.toLowerCase().includes(keyword.toLowerCase()),
    );

    if (selectedCategory && keyword) {
      setFilteredProduct(updateProducts);
    } else if (selectedCategory) {
      setFilteredProduct(
        products.filter(product => product?.category === selectedCategory),
      );
    } else if (keyword) {
      setFilteredProduct(
        products.filter(product =>
          product?.title.toLowerCase().includes(keyword.toLowerCase()),
        ),
      );
    } else {
      setFilteredProduct(products);
    }
  }, [selectedCategory, keyword]);

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
              <Input
                placeholder="Search for items and more..."
                onChangeText={onSearch}
                value={keyword}
              />
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
            data={filteredProduct}
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
