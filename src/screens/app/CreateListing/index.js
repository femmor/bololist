import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Linking} from 'react-native';

import styles from './styles';
import {AppHeader} from '../../../components';

import backIcon from '../../../assets/icons/back_outline.png';

const CreateListing = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <AppHeader
        title="Create a new Listing"
        showLeftIcon
        leftIcon={backIcon}
        leftIconPress={() => navigation.goBack()}
        leftIconStyle={styles.backIcon}
      />
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Upload Photos</Text>
      </View>
    </SafeAreaView>
  );
};
export default CreateListing;
