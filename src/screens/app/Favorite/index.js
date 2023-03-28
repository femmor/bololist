import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
import {View, Text} from 'react-native';

import styles from './styles';
import {AppHeader} from '../../../components';

const Favorite = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <AppHeader title="Favorites" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Favorite;
