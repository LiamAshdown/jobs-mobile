import { createStackNavigator } from "@react-navigation/stack";

import ViewJobsScreen from "../screens/jobs/ViewJobsScreen";

const Stack = createStackNavigator();

const MainNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="View Jobs" component={ViewJobsScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
