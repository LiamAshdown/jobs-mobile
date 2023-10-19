import { createStackNavigator } from "@react-navigation/stack";

import CreateJobScreen from "../screens/jobs/CreateJobScreen";
import UpdateJobScreen from "../screens/jobs/UpdateJobScreen";
import ViewJobsScreen from "../screens/jobs/ViewJobsScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="View Jobs" component={ViewJobsScreen} />
      <Stack.Screen name="Create Job" component={CreateJobScreen} />
      <Stack.Screen name="Update Job" component={UpdateJobScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
