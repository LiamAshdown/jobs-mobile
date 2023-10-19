import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { View, Text } from "react-native";

import AlertStyles from "../styles/AlertStyles";

const Alert = ({ message, type, style = {} }) => {
  return (
    <View
      style={[
        AlertStyles.container,
        style,
        type === "error" ? AlertStyles.error : {},
      ]}
    >
      <Ionicons
        name="alert-circle"
        size={20}
        color={type === "error" ? "#f00" : ""}
      />
      <Text
        style={[
          AlertStyles.text,
          type === "error" ? AlertStyles.errorText : {},
        ]}
      >
        {message}
      </Text>
    </View>
  );
};

export default Alert;
