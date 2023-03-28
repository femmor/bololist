import {useState, useRef, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
import {View, Text} from 'react-native';

import styles from './styles';
import {AppHeader, Input} from '../../../components';
import searchIcon from '../../../assets/icons/search.png';

const Home = ({navigation}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  return (
    <SafeAreaView>
      <ScrollView>
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
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
