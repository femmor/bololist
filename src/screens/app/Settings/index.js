import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, Pressable, Linking} from 'react-native';

import styles from './styles';
import {AppHeader, ListItem} from '../../../components';

import editIcon from '../../../assets/icons/edit_outline.png';

const Settings = ({navigation}) => {
  const onEditProfile = () => {
    console.log('Edit Profile pressed');
  };

  const onItemPress = () => {
    Linking.openURL('https://www.google.com');
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <AppHeader title="Settings" />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.subTitle}>Personal Information</Text>
            <Pressable onPress={onEditProfile}>
              <Image source={editIcon} style={styles.editIcon} />
            </Pressable>
          </View>

          <ListItem title="Bruno Pharm" subTitle="Name" reversed />
          <ListItem title="bruno123@gmail.com" subTitle="Email" reversed />

          <View style={styles.helpCenter}>
            <Text style={styles.subTitle}>Help Center</Text>
            <ListItem onPress={onItemPress} title="FAQ" showIcon />
            <ListItem onPress={onItemPress} title="Contact Us" showIcon />
            <ListItem onPress={onItemPress} title="Privacy & Terms" showIcon />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default Settings;
