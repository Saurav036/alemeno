import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState } from "react";

import { NavigationContainer , useRoute} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaProvider,
} from "react-native";
// import { SafeAreaProvider } from 'react-native-safe-area-context'
import { styles } from "./components/base/Styles";
import Login from "./screens/Login";
import CourseList from "./screens/CourseList"
import CourseDetail from "./screens/CourseDetail";
import WavyHeader from "./components/Header";
import ProfileButton from "./components/ProfileButton.";
import EnrollmentDashboard from "./screens/DashBoard";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <WavyHeader />
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Courses" component={CourseList} />
        <Stack.Screen name="Course" component={CourseDetail} />
        <Stack.Screen name="Dashboard" component={EnrollmentDashboard} />
      </Stack.Navigator>
      <ProfileButton  />
    </NavigationContainer>
  );
}
