import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    paddingTop: "40%",
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    marginBottom: 0,
  },
  dontHaveAnAccountContainer: {
    flexDirection: "row",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 20,
  },
  dontHaveAnAccountLink: {
    fontWeight: "bold",
    color: "blue",
    marginLeft: 5,
    textDecorationLine: "underline",
  },
  alert: {
    marginBottom: 10,
  },
});
