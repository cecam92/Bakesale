import React from 'react';
import Home from '../components/Home';
import DealDetail from '../components/DealDetail';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={DealDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
