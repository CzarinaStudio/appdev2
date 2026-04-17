import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        title="Go to Details (No Params)"
        onPress={() => navigation.navigate('Details')}
      />

      <Button
        title="Go to Details with Data"
        onPress={() =>
          navigation.navigate('Details', {
            userName: 'John Doe',
            age: 20,
          })
        }
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }) {
  const { userName = 'Guest', age = 'Not Provided' } =
    route.params || {};

  return (
    <View>
      <Text>Details Screen</Text>
      <Text>Name: {userName}</Text>
      <Text>Age: {age}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
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
          initialParams={{
            userName: 'Default User',
            age: 18,
          }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}