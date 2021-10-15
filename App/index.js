import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store';
import RootNavigator from './navigation/RootNavigator';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider>
          <RootNavigator initialRouteName="LandingScreen" />
        </PaperProvider>
      </PersistGate>
    </StoreProvider>
  );
};

export default App;
