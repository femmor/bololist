import {SafeAreaView} from 'react-native-safe-area-context';
import {View, Text, Image, Pressable, Linking} from 'react-native';

import styles from './styles';
import {AppHeader, Button, EditableBox, ListItem} from '../../../components';

import editIcon from '../../../assets/icons/edit_outline.png';
import backIcon from '../../../assets/icons/back_outline.png';
import {useState} from 'react';

const Settings = ({navigation}) => {
  const [editMode, setEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    name: 'David Lobga',
    email: 'dlobga@gmail.com',
  });

  const onChangeUserInfo = (key, value) => {
    setUserInfo({
      ...userInfo,
      [key]: value,
    });
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  const onEditProfile = () => {
    setEditMode(false);
    console.log('Profile updated', userInfo);
  };

  const onItemPress = () => {
    Linking.openURL('https://www.google.com');
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}>
      <AppHeader
        title="Settings"
        showLeftIcon
        leftIcon={backIcon}
        leftIconPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.titleContainer}>
            <Text style={styles.subTitle}>Personal Information</Text>
            <Pressable onPress={toggleEditMode}>
              <Image source={editIcon} style={styles.editIcon} />
            </Pressable>
          </View>

          <View style={styles.profileInfo}>
            {
              // If editMode is true, show the input field
              editMode ? (
                <EditableBox
                  title={userInfo.name}
                  label="Name"
                  placeholder={userInfo.name}
                  value={userInfo.name}
                  onChangeText={value => onChangeUserInfo('name', value)}
                />
              ) : (
                <ListItem
                  title={userInfo.name}
                  subTitle="Name"
                  reversed
                  stylr={styles.disabled}
                />
              )
            }

            <ListItem title={userInfo.email} subTitle="Email" reversed />

            {editMode ? (
              <Button
                title="Save"
                onPress={onEditProfile}
                style={styles.button}
              />
            ) : null}
          </View>

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
