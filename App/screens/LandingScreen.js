import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';

import {Title} from 'react-native-paper';

import GoogleSignIn from '../components/GoogleSignIn';
const LandingScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{alignItems: 'center', marginTop: 250}}>
          <Title style={{marginVertical: 50}}>
            Welcome to the TODO List App
          </Title>
          <GoogleSignIn />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingScreen;
