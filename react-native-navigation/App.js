import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text, Button } from 'react-native';
import { RootStackParamList, HomeScreenProps, DetailsScreenProps } from './types';

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View>
      <Text>Home Screen</Text>

      <Button
        title="Go to Details (Nested Data)"
        onPress={() =>
          navigation.navigate('Details', {
            user: {
              name: 'John Doe',
              info: {
                age: 20,
                school: 'React University',
              },
            },
          })
        }
      />
    </View>
  );
}

function DetailsScreen({ route, navigation }: DetailsScreenProps) {
  const { user } = route.params;

  return (
    <View>
      <Text>Details Screen</Text>
      <Text>Name: {user.name}</Text>
      <Text>Age: {user.info.age}</Text>
      <Text>School: {user.info.school}</Text>

      <Button
        title="Go to Home with Update"
        onPress={() =>
          navigation.navigate('Home')
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