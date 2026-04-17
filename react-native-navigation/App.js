import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen() {
  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
}

function DetailsScreen() {
  return (
    <View>
      <Text>Details Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'Home Dashboard',
            headerStyle: { backgroundColor: '#2ecc71' },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{
            title: 'Details Info',
            headerStyle: { backgroundColor: '#e74c3c' },
            headerTintColor: '#fff',
            headerTitleAlign: 'center',
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}