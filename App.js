import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MessageScreen from './MessageScreen';  // หน้ารายชื่อแชท
import ChatScreen from './ChatScreen';        // หน้าห้องแชท

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MessageScreen"
        screenOptions={{
          headerStyle: { backgroundColor: '#FFB6C1' }, // แถบ header สีชมพู
          headerTintColor: '#fff', // ข้อความสีขาว
        }}
      >
        {/* ซ่อน header ของ MessageScreen เพื่อใช้ header custom (ปุ่ม back เอง) */}
        <Stack.Screen
          name="MessageScreen"
          component={MessageScreen}
          options={{ headerShown: false }}
        />

        {/* ChatScreen ยังใช้ header ปกติ และตั้งชื่อแชทจาก route.params */}
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={({ route }) => ({
            headerTitle: route.params.chatName,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
