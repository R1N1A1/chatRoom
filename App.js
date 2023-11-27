import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import MainPage from './Screens/MainPage';
import RoomName from './Screens/RoomName';
import RoomChat from './Screens/RoomChat';
import ChatScreen from './Screens/ChatScreen';


const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer >
      <Stack.Navigator screenOptions={
        {
          headerShown: false,
          animation: 'slide_from_right',
        }
      }>
        <Stack.Screen name='MainPage' component={MainPage} />
        <Stack.Screen name='RoomName' component={RoomName} />
        <Stack.Screen name='RoomChat' component={RoomChat} />
        <Stack.Screen name='ChatScreen' component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
