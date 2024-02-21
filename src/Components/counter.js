import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import { store } from "../redux/store";
import action from "../redux/actions/counterAction";
import { useSelector } from "react-redux";

export default function Counter() {
    const counter = useSelector((state)=> state.counter);

  return (
    <View style={styles.container}>
      <Button title={"Increment"} onPress={action.increment}>
        Increment
      </Button>
      <Text style={{ fontSize: 200 }}>{counter}</Text>
      <Button title={"Decrement"} onPress={action.decrement}></Button>
      <StatusBar style="auto" />
    </View>
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
