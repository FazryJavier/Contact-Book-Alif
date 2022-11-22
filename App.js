import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DashboardScreen from "./src/DashboardScreen";
import InputContact from "./src/InputContact";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="DashboardScreen" component={DashboardScreen} />
        <Stack.Screen options={{ headerShown: false }} name="InputContact" component={InputContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
