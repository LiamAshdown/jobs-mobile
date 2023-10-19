import { createStackNavigator } from "@react-navigation/stack";

import CreateJobScreen from "../screens/jobs/CreateJobScreen";
import ViewJobsScreen from "../screens/jobs/ViewJobsScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="View Jobs" component={ViewJobsScreen} />
      <Stack.Screen name="Create Job" component={CreateJobScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
