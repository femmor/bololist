import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native';
import {View, Text} from 'react-native';

import styles from './styles';
import {AppHeader, Button, ListItem} from '../../../components';

import logoutIcon from '../../../assets/icons/logout_outline.png';

const Profile = ({navigation}) => {
  const numOfListings = 10;

  const onLogout = () => {
    console.log('Logout pressed');
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <AppHeader
        title="Profile"
        showRightIcon
        rightIcon={logoutIcon}
        rightIconPress={onLogout}
      />
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.name}>David Lobga</Text>
          <Text style={styles.email}>dangelo@gmail.com</Text>
          <ListItem
            title="My Listings"
            subTitle={`Already have ${numOfListings} Listings`}
            showIcon
            onPress={() => navigation.navigate('MyListings')}
          />
          <ListItem
            title="Settings"
            subTitle="Account, FAQ, Contact"
            showIcon
            onPress={() => navigation.navigate('Settings')}
          />
        </View>
        <Button
          style={{
            flex: 0,
          }}
          title="Add New Listing"
          onPress={() => navigation.navigate('CreateListing')}
        />
      </View>
    </SafeAreaView>
  );
};
export default Profile;
