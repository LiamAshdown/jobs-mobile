import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import Toast from "react-native-toast-message";
import { useSelector } from "react-redux";

import AuthNavigator from "./navigation/AuthNavigator";
import MainNavigator from "./navigation/MainNavigator";
import { isAuthenticated } from "./store/auth/selectors";

const Boot = () => {
  const authenticated = useSelector(isAuthenticated);

  console.log("authenticated", authenticated);

  return (
    <PaperProvider>
      <NavigationContainer>
        {authenticated ? <MainNavigator /> : <AuthNavigator />}
      </NavigationContainer>
      <Toast />
    </PaperProvider>
  );
};

export default Boot;
