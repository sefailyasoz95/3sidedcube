import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailScreen from '../Screens/DetailScreen';
import {AppStackParamList} from '../Constants/AppStackParamList';

const App = createStackNavigator<AppStackParamList>();

const AppStack = () => {
  return (
    <App.Navigator>
      <App.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{title: 'Back', headerShown: false}}
      />
      <App.Screen
        name="DetailScreen"
        component={DetailScreen}
        options={{headerShown: true, title: 'Pokemon Detail'}}
      />
    </App.Navigator>
  );
};

export default AppStack;
