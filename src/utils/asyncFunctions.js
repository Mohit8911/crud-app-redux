import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async (value) => {
  try {
    console.log("store", value);
    await AsyncStorage.setItem("users", JSON.stringify(value));
    // console.log("localdata");
  } catch (e) {
    Alert.alert(e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("users");
    console.log("jsoon", jsonValue);
    return jsonValue != null ? JSON.parse(jsonValue) : [];
  } catch (e) {
    Alert.alert(e);
  }
};