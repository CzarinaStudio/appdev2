import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation, route }) {
  const updatedMessage = route.params?.message;

  return (
    <View>
      <Text>Home Screen</Text>

      {updatedMessage && (
        <Text style={{ marginTop: 10 }}>
          Message from Details: {updatedMessage}
        </Text>
      )}

      <Button
        title="Go to Details"
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

function DetailsScreen({ navigation }) {
  return (
    <View>
      <Text>Details Screen</Text>

      <Button
        title="Send Message Back"
        onPress={() =>
          navigation.navigate('Home', {
            message: 'Hello from Details Screen',
          })
        }
      />

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
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}