import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { TextInput, Button, HelperText } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";

import Alert from "../components/Alert";
import { loginUser } from "../store/auth/actions";
import { resetAuth } from "../store/auth/reducer";
import { hasError, isLoading } from "../store/auth/selectors";
import AuthStyles from "../styles/AuthStyles";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const loading = useSelector(isLoading);
  const error = useSelector(hasError);

  const dispatch = useDispatch();

  const onRegisterPress = () => {
    dispatch(resetAuth());
    navigation.navigate("Register");
  };

  const onShowPasswordPressed = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = () => {
    dispatch(loginUser({ email, password }));
  };

  return (
    <View style={AuthStyles.container}>
      <View>
        <Text style={AuthStyles.header}>Login</Text>
        {error.message && (
          <Alert
            message={error.message || "Something went wrong!"}
            type="error"
            style={{
              marginBottom: 10,
            }}
          />
        )}
        <View>
          <View style={AuthStyles.input}>
            <TextInput
              placeholder="Email"
              keyboardType="email-address"
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
              keyboardType="default"
              onChangeText={(text) => setPassword(text)}
              right={
                <TextInput.Icon
                  icon={showPassword ? "eye-off" : "eye"}
                  onPress={onShowPasswordPressed}
                />
              }
              error={error.errors && error.errors.password}
            />
            <HelperText
              type="error"
              visible={error.errors && error.errors.password}
            >
              {error.errors && error.errors.password}
            </HelperText>
          </View>
          <Button mode="contained" onPress={onSubmit} loading={loading}>
            Login
          </Button>
          <View style={AuthStyles.dontHaveAnAccountContainer}>
            <Text>Don't have an account?</Text>
            <TouchableOpacity onPress={onRegisterPress}>
              <Text style={AuthStyles.dontHaveAnAccountLink}>
                Register here
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
