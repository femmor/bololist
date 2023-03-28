import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
import {View, Text} from 'react-native';

import styles from './styles';

const Home = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}></View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Home;
