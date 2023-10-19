// screens/LoginScreen.js
import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import Alert from "../components/Alert";
import { registerUser } from "../store/auth/actions";
import { hasError, isLoading } from "../store/auth/selectors";
import AuthStyles from "../styles/AuthStyles";

const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const loading = useSelector(isLoading);
  const error = useSelector(hasError);

  const dispatch = useDispatch();

  // console.log("error", error);
  //console.log(error.errors.email);

  const onSignUpPressed = () => {
    navigation.navigate("Login");
  };

  const onShowPasswordPressed = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = () => {
    dispatch(registerUser({ email, password }));
  };

  return (
    <View style={AuthStyles.container}>
      <View>
        <Text style={AuthStyles.header}>Register</Text>
        {error && error.message && (
          <Alert
            message={error.message}
            style={AuthStyles.alert}
            type="error"
          />
        )}
        <View>
          <View style={AuthStyles.input}>
            <TextInput
              placeholder="Email"
              onChangeText={(text) => setEmail(text)}
              error={error.errors && error.errors.email}
            />
            <HelperText
              type="error"
              visible={error.errors && error.errors.email}
            >
              {error.errors && error.errors.email}
            </HelperText>
          </View>
          <View style={AuthStyles.input}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword}
              onChangeText={(text) => setPassword(text)}
              right={
                <TextInput.Icon
                  icon={showPassword ? "eye-off" : "eye"}
                  onPress={onShowPasswordPressed}
                />
              }
            />
            <HelperText
              type="error"
              visible={error.errors && error.errors.password}
            >
              {error.errors && error.errors.password}
            </HelperText>
          </View>
          <Button mode="contained" onPress={onSubmit} loading={loading}>
            Register
          </Button>
          <View
            style={AuthStyles.dontHaveAnAccountContainer}
            onPress={onSignUpPressed}
          >
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={onSignUpPressed}>
              <Text style={AuthStyles.dontHaveAnAccountLink}>Login here</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
