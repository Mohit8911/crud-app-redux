import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import HomeScreen from "./src/Screens/HomeScreen";
import EditUpdateScreen from "./src/Screens/EditUpdateScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import "react-native-gesture-handler";
import actions from "./src/redux/actions/userAction";
import { useEffect } from "react";
import { getData } from "./src/utils/asyncFunctions";

const Stack = createStackNavigator();

export default function App() {

  useEffect(() => {
    getData().then((users) => {
      if (users) {
        actions.storeUsers(users);
      }
    });
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="EditUpdate"
            component={EditUpdateScreen}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
