import React, { useEffect, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import { moderateScale, verticalScale } from "react-native-size-matters";
import { useSelector } from "react-redux";
import DetailCard from "../Components/DetailCard";

const HomeScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  const usersData = useSelector((state) => state.users);

  useEffect(() => {
    setUsers(usersData);
  }, [usersData]);


  return (
    <>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>HomeScreen</Text>
        </View>
        
        <FlatList
          data={users}
          style={{ width: "100%" }}
          renderItem={({ item }) => (
            <DetailCard item={item} navigation={navigation} />
          )}
        />
      </View>
      <TouchableOpacity
        style={styles.addBtn}
        onPress={() =>
          navigation.navigate("EditUpdate", { btnTitle: "Add Record" })
        }
      >
        <Text>+</Text>
      </TouchableOpacity>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingTop: verticalScale(40),
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
  },
  header: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "white",
    padding: moderateScale(10),
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  addBtn: {
    position: "absolute",
    backgroundColor: "aqua",
    justifyContent: "center",
    alignItems: "center",
    bottom: 25,
    right: 25,
    padding: moderateScale(20),
    borderRadius: moderateScale(100),
    padding: moderateScale(20),
    // zIndex: 1,
  },
});
