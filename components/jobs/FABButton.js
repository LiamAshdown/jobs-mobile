import * as React from "react";
import { FAB } from "react-native-paper";

import FABButtonStyles from "../../styles/jobs/FABButtonStyles";

const FABButton = ({ onPress }) => (
  <FAB icon="plus" color="#fff" style={FABButtonStyles.fab} onPress={onPress} />
);

export default FABButton;
