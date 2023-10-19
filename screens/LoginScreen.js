// screens/LoginScreen.js
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput, Button } from "react-native-paper";

import AuthStyles from "../styles/AuthStyles";

const LoginScreen = ({ navigation }) => {
  const onSignUpPressed = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={AuthStyles.container}>
      <Text style={AuthStyles.header}>Login</Text>
      <TextInput style={AuthStyles.input} placeholder="Email" />
      <TextInput style={AuthStyles.input} placeholder="Password" />
      <Button mode="contained">Login</Button>
      <View
        style={AuthStyles.dontHaveAnAccountContainer}
        onPress={onSignUpPressed}
      >
        <Text>Don't have an account?</Text>
        <TouchableOpacity onPress={onSignUpPressed}>
          <Text style={AuthStyles.dontHaveAnAccountLink}>Sign up here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginScreen;
