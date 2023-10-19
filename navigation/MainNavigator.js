import { createStackNavigator } from "@react-navigation/stack";
import { IconButton } from "react-native-paper";
import Toast from "react-native-toast-message";

import CreateJobScreen from "../screens/jobs/CreateJobScreen";
import UpdateJobScreen from "../screens/jobs/UpdateJobScreen";
import ViewJobsScreen from "../screens/jobs/ViewJobsScreen";

const Stack = createStackNavigator();

const onCogPress = () => {
  Toast.show({
    type: "info",
    text1: "Settings",
    text2: "This doesn't do anything :( Just for show",
    position: "bottom",
  });
};

const SettingsCogHeader = ({ navigation }) => {
  return <IconButton icon="cog" size={25} onPress={() => onCogPress()} />;
};

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        name="View Jobs"
        component={ViewJobsScreen}
        options={({ navigation }) => ({
          headerRight: () => <SettingsCogHeader navigation={navigation} />,
        })}
      />
      <Stack.Screen name="Create Job" component={CreateJobScreen} />
      <Stack.Screen name="Update Job" component={UpdateJobScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
