import React, {useState, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import registerNNPushToken from 'native-notify';

import Home from './src/Screens/Home';
import Login from './src/Screens/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  // Push notifications
  registerNNPushToken(6348, 'Lmax7bvrDSFqId9d2ApIh9');

  // Global State Management
  const [stats, setStats] = useState([{ id: 1, name: '', health: 100, hunger: 100}]);
  const [name, setName] = useState('');
  const [health, setHealth] = useState(100);
  const [hunger, setHunger] = useState(100);

  const GlobalState = {
    stats, setStats,
    name, setName,
    health, setHealth,
    hunger, setHunger
  }


  // Navigation

  return (
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen name="Login" options={{ headerShown: false}}>
          {props => <Login {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

        <Stack.Screen name="Home" options={{ headerShown: false}}>
          {props => <Home {...props} GlobalState={GlobalState} />}
        </Stack.Screen>

      </Stack.Navigator>
    </NavigationContainer>
  );
}
