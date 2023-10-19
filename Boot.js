import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import { useSelector } from "react-redux";

import AuthNavigator from "./navigation/AuthNavigator";
import MainNavigator from "./navigation/MainNavigator";
import { isAuthenticated } from "./store/auth/selectors";

const Boot = () => {
  const authenticated = useSelector(isAuthenticated);

  return (
    <PaperProvider>
      <NavigationContainer>
        {authenticated ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </PaperProvider>
  );
};

export default Boot;
