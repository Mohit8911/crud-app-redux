import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { verticalScale, moderateScale } from "react-native-size-matters";
import MyTextInput from "../Components/MyTextInput";
import MyButton from "../Components/MyButton";
import actions from "../redux/actions/userAction";

const EditUpdateScreen = ({ route, navigation }) => {
  const [user, setUser] = useState({
    id: "",
    name: "",
    address: "",
    age: "",
    phone: "",
  });

  useEffect(() => {
    const { item } = route.params;
    if (item) {
      setUser(item);
    }
  }, []);


  const handleChangeText = (type, text) => {
    const newUser = user;
    newUser[type] = text;
    console.log(newUser);
    setUser({ ...newUser });
  };

  const handleSubmit = () => {
    if (validateUser()) {
      if (route.params.btnTitle == "Update") {
        actions.updateUser(user);
      } else {
        actions.addUser({ ...user, id: Date.now() });
      }

      navigation.navigate("Home");
    }
  };

  const validateUser = () => {
    if (user.name.trim() == "") {
      Alert.alert("Please enter your name");
      return false;
    }
    if (user.address.trim() == "") {
      Alert.alert("Please enter your name");
      return false;
    }
    if (user.age.trim() == "") {
      Alert.alert("Please enter your age");
      return false;
    }
    if (user.phone.trim() == "") {
      Alert.alert("Please enter your phone number");
      return false;
    }
    if (user.phone.trim().length < 10) {
      Alert.alert("Phone no. should be at least 10 digits");
      return false;
    }
    return true;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Enter Details</Text>
      </View>
      <View style={{ width: "95%" }}>
        <MyTextInput
          placeholder={"Enter Name"}
          dataType="name"
          value={user.name}
          handleChangeText={handleChangeText}
        />
        <MyTextInput
          placeholder={"Enter City"}
          dataType="address"
          value={user.address}
          handleChangeText={handleChangeText}
        />
        <MyTextInput
          placeholder={"Enter Age"}
          dataType="age"
          value={user.age}
          keyboardType="numeric"
          handleChangeText={handleChangeText}
        />
        <MyTextInput
          placeholder={"Enter Phone No."}
          dataType="phone"
          keyboardType="numeric"
          value={user.phone}
          handleChangeText={handleChangeText}
        />
      </View>
      <MyButton title={route.params.btnTitle} onPress={handleSubmit} />
    </View>
  );
};

export default EditUpdateScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(40),
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "rgba(255, 25,22,0.2)",
  },
  header: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    padding: moderateScale(10),
  },
  text: {
    fontSize: moderateScale(22),
    fontWeight: "bold",
  },
});
