import {useState, useRef, useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
import {View, Text} from 'react-native';

import styles from './styles';
import {AppHeader, Input} from '../../../components';
import searchIcon from '../../../assets/icons/search.png';
import * as Animatable from 'react-native-animatable';

const Home = ({navigation}) => {
  const [showSearchInput, setShowSearchInput] = useState(false);

  const toggleSearchInput = () => {
    setShowSearchInput(!showSearchInput);
  };

  const fadeIn = {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
    },
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
          <Animatable.View
            style={styles.searchInputContainer}
            animation={fadeIn}>
            {showSearchInput ? (
              <Input placeholder="Search for items and more..." />
            ) : null}
          </Animatable.View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
