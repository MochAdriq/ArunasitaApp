import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen/HomeScreen';

// Mendefinisikan tipe untuk parameter setiap screen
export type RootStackParamList = {
  Home: undefined; // Home screen tidak memerlukan parameter
  // Nanti kita bisa tambahkan screen lain di sini, contoh:
  // Profile: { userId: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }} // Kita sembunyikan header bawaan
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
