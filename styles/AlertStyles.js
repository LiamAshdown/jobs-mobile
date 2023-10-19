import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10,
    padding: 10,
    gap: 5,
  },
  text: {},
  error: {
    borderWidth: 1,
    borderColor: "#f00",
    borderRadius: 5,
    backgroundColor: "#fee",
  },
  errorText: {
    color: "#f00",
  },
});
