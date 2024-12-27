import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthNavigator} from './src/navigation';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthNavigator />
    </NavigationContainer>
  );
}

export default App;
