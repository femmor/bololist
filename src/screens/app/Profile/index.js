import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
import {View, Text} from 'react-native';

import styles from './styles';
import {AppHeader} from '../../../components';

import logoutIcon from '../../../assets/icons/logout_outline.png';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <AppHeader
            title="Profile"
            showRightIcon
            rightIcon={logoutIcon}
            rightIconPress={() => console.log('Right icon pressed')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Profile;
