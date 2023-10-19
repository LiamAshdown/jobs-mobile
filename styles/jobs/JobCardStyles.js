import { StyleSheet } from "react-native";

import { TEXT_LIGHT_GREY } from "../../constants/colors";

export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  titleContainer: {},
  footerContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  companyText: {
    color: TEXT_LIGHT_GREY,
  },
  dateText: {
    color: TEXT_LIGHT_GREY,
  },
  salaryText: {
    fontWeight: "bold",
  },
  actionsContainer: {
    display: "flex",
    gap: -15,
    flexDirection: "row",
  },
});
