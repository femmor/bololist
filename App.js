import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {SignUp, SplashScreen} from './src/screens';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

const WEB_CLIENT_ID =
  '187197711864-f03ht07l47rgvpg29vifb8ct9o404l83.apps.googleusercontent.com';

const IOS_CLIENT_ID =
  '187197711864-8mk5ijqsofqchp19pedpq62mf38r20gf.apps.googleusercontent.com';
const REVERSED_IOS_CLIENT_ID =
  'com.googleusercontent.apps.187197711864-8mk5ijqsofqchp19pedpq62mf38r20gf';

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
      <View
        style={{
          margin: 20,
        }}>
        {/* <SplashScreen /> */}
        <SignUp />
      </View>
    </SafeAreaView>
  );
};

export default App;
