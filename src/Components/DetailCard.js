import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import MyButton from "./MyButton";
import actions from "../redux/actions/userAction";


const DetailCard = ({ item, navigation }) => {

  const handleDelete = () => {
    actions.removeUser(item.id);
  };

  const handleEdit = () => {
    navigation.navigate("EditUpdate", { item: item, btnTitle: "Update" });
  };

  return (
    <View style={styles.container}>
      <Text>Name: {item.name}</Text>
      <Text>City: {item.address}</Text>
      <Text>Age: {item.age}</Text>
      <Text>Phone no. {item.phone}</Text>
      <View style={styles.btnContainer}>
        <MyButton
          title="Edit"
          style={{ backgroundColor: "green" }}
          onPress={() => handleEdit()}
        />
        <MyButton
          title="Delete"
          style={{ backgroundColor: "red" }}
          onPress={() => handleDelete()}
        />
      </View>
    </View>
  );
};

export default DetailCard;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: verticalScale(100),
    // widht: scale(100),
    marginVertical: verticalScale(20),
    padding: scale(10),
    alignSelf: "center",
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: moderateScale(10),
  },
  btnContainer: {
    width: "100%",
    justifyContent: "space-around",
    flexDirection: "row",
    alignItems: "center",
  },
});
