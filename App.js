import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {SignUp, SplashScreen} from './src/screens';

const App = () => {
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
