import React, {useEffect} from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';
import {SignIn, SignUp, SplashScreen} from './src/screens';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';

const WEB_CLIENT_ID = Config.GOOGLE_WEB_CLIENT_ID;
const IOS_CLIENT_ID = Config.IOS_CLIENT_ID;

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);

  return (
    <SafeAreaView>
      <ScrollView
        style={{
          margin: 20,
        }}>
        {/* <SplashScreen /> */}
        {/* <SignUp /> */}
        <SignIn />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
