import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import React from "react";



const MyTextInput = ({ dataType, handleChangeText, ...rest }) => {
  
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
      
        {...rest}
        onChangeText={(text) => handleChangeText(dataType, text)}
      ></TextInput>
    </View>
  );
};

export default MyTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-between',
    marginTop: 16,
    borderRadius: 8,
    backgroundColor: "white",
    padding: 10,
  },

  textInput: {
    // color: "white",
    flex:1,
  },
});
