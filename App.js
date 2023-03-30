import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import {Image} from 'react-native';
import {
  Favorite,
  Home,
  MyListings,
  ProductDetails,
  Profile,
  Settings,
  SignIn,
  SignUp,
  SplashScreen,
} from './src/screens';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Config from 'react-native-config';
import {colors} from './src/utils/colors';

// Icons
import homeOutline from './src/assets/icons/home_outline.png';
import homeSolid from './src/assets/icons/home.png';
import userOutline from './src/assets/icons/user_outline.png';
import userSolid from './src/assets/icons/user_solid.png';
import favoriteOutline from './src/assets/icons/favorite_outline.png';
import favoriteSolid from './src/assets/icons/favorite_solid.png';

// Google Signin Credentials
const WEB_CLIENT_ID = Config.GOOGLE_WEB_CLIENT_ID;
const IOS_CLIENT_ID = Config.IOS_CLIENT_ID;

// Navigation config
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="MyListings"
      component={MyListings}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

const Tabs = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, color, size}) => {
        let icon;

        if (route.name === 'Home') {
          icon = focused ? homeSolid : homeOutline;
        } else if (route.name === 'ProfileStack') {
          icon = focused ? userSolid : userOutline;
        } else if (route.name === 'Favorite') {
          icon = focused ? favoriteSolid : favoriteOutline;
        }

        // You can return any component that you like here!
        return (
          <Image
            source={icon}
            style={{
              width: 20,
              height: 20,
            }}
          />
        );
      },
      tabBarActiveTintColor: colors.primary,
      tabBarInactiveTintColor: colors.darkGray,
      tabBarShowLabel: false,
      tabBarStyle: {
        borderTopColor: colors.lightGray,
      },
      headerShown: false,
    })}>
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Favorite" component={Favorite} />
    <Tab.Screen name="ProfileStack" component={ProfileStack} />
  </Tab.Navigator>
);

const App = () => {
  const isSignedIn = true;

  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
      webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
      offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
      iosClientId: IOS_CLIENT_ID, // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
    });
  }, []);

  const theme = {
    dark: false,
    colors: {
      background: colors.white,
    },
  };

  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator initialRouteName="Splash">
          {isSignedIn ? (
            <>
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="Settings"
                component={Settings}
                options={{
                  headerShown: false,
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Splash"
                component={SplashScreen}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{
                  headerShown: false,
                }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
