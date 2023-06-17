import { StatusBar, StyleSheet, Text, View, Pressable } from "react-native";
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StripeProvider } from "@stripe/stripe-react-native";
import React from "react";
import SPACING from "./app/config/SPACING";
import colors from "./app/config/colors";
import Icon from 'react-native-ico-material-design';
import CompanyScreen from "./app/screens/CompanyScreen";
import CarScreen from "./app/screens/CarScreen";
import HiaceScreen from "./app/screens/HiaceScreen";
import CoasterScreen from "./app/screens/CoasterScreen";
import LoginScreen from "./app/screens/LoginScreen";
import SignUpScreen from './app/screens/SignUpScreen';
import NavigationBar from "./assets/navigation/NavigationBar";
import BookingScreen from "./app/screens/BookingScreen";
import ForgetPassScreen from "./app/screens/ForgetPassScreen";
import ConfirmedBookingDetails from './app/screens/ConfirmedBookingDetails';
import PaymentScreen from './app/screens/PaymentScreen';
import RatingScreen from "./app/screens/RatingScreen";
import ProfileScreen from "./app/screens/ProfileScreen";
import DashboardScreen from "./app/screens/DashboardScreen";
import AcceptBookingScreen from "./app/screens/AcceptBookingScreen";
import OtpScreen from "./app/screens/OtpScreen";

const navTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'transparent',
  },
};

const App = () => {

  const navTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: 'transparent',
    },
  };


  const Stack = createNativeStackNavigator();
  return (

    <View
      style={{
        paddingHorizontal: SPACING * 2,
        flex: 1,
        backgroundColor: colors.black,
      }}
    >
      {/* <View style={styles.container}>

        <StripeProvider publishableKey="pk_test_51MPGa5C9U4OcPKbGZCECoH37bZmM8MrgSyWXD6VLj4EdHGxmxyhlrFvWBtHZYcCxdNntEQedTOUXd8frmdGVzP3D00MMjxw2bb">
          <PaymentScreen />
        </StripeProvider>
        <StatusBar style="auto" />

      </View> */}
      <NavigationContainer theme={navTheme}>
        <Stack.Navigator initialRouteName="Login">
          {/* <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Company" component={CompanyScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Car" component={CarScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Hiace" component={HiaceScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Coaster" component={CoasterScreen} options={{ headerShown: false }} /> */}
          <Stack.Screen name="Booking" component={BookingScreen} options={{ headerShown: false }} />
          {/* <Stack.Screen name="ForgetPass" component={ForgetPassScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Navigator" component={NavigationBar} options={{ headerShown: false }} /> */}
          {/* <Stack.Screen name="paymentscreem" component={PaymentScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Rating" component={RatingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AcceptBooking" component={AcceptBookingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Dashboard" component={DashboardScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Otp" component={OtpScreen} options={{ headerShown: false }} /> */}
          {/* <Stack.Screen name="Chatbot" component={ChatBotScreen} options={{ headerShown: false }} /> */}


          {/* <SignUpScreen /> */}
          {/* <LoginScreen /> */}
          {/* <CarScreen /> */}
          {/* <HiaceScreen /> */}
          {/* <CoasterScreen /> */}
          {/* <CompanyScreen /> */}
          {/* <NavigationBar /> */}
          {/* <Booking /> */}
        </Stack.Navigator>
      </NavigationContainer >

      <StatusBar barStyle="light-content" />
    </View >


  );
};

// const Splash = () => {
//   return (
// <NavigationContainer>
//       <Stack.Navigator initialRouteName="SplashScreen">
//         {/* SplashScreen which will come once for 5 Seconds */}
//         <Stack.Screen
//           name="SplashScreen"
//           component={SplashScreen}
//           // Hiding header for Splash Screen
//           options={{ headerShown: false }}
//         />
//         {/* Auth Navigator: Include Login and Signup */}
//         <Stack.Screen
//           name="Auth"
//           component={Auth}
//           options={{ headerShown: false }}
//         />
//         {/* Navigation Drawer as a landing page */}
//         <Stack.Screen
//           name="DrawerNavigationRoutes"
//           component={DrawerNavigationRoutes}
//           // Hiding header for Navigation Drawer
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

