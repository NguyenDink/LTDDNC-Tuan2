import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import StartPage from "./app/screens/StartPage";
import LoginPage from "./app/screens/LoginPage";
import HomePage from "./app/screens/HomePage";
import RegisterPage from "./app/screens/RegisterPage";
import MoreInfoPage from "./app/screens/MoreInfoPage";
import ForgotPassWordPage from "./app/screens/ForgotPasswordPage";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="Start"
                screenOptions={{
                    headerShown: false,
                    gestureEnabled: true,
                    ...TransitionPresets.SlideFromRightIOS,
                }}
            >
                <Stack.Screen name="Start" component={StartPage} />
                <Stack.Screen name="Login" component={LoginPage} />
                <Stack.Screen
                    name="ForgotPassWord"
                    component={ForgotPassWordPage}
                    options={{ headerShown: true, headerTitle: "" }}
                />
                <Stack.Screen name="Register" component={RegisterPage} />
                <Stack.Screen name="MoreInfo" component={MoreInfoPage} />
                <Stack.Screen name="Home" component={HomePage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
