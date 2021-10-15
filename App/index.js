import React from 'react';

import RootNavigator from './navigation/RootNavigator';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  return (
    <PaperProvider>
      <RootNavigator initialRouteName="LandingScreen" />
    </PaperProvider>
  );
};

export default App;
