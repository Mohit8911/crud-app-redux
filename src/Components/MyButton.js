import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { scale } from 'react-native-size-matters';

const MyButton = ({title,style, ...rest}) => {
  return (
      <TouchableOpacity style={{...styles.btn, ...style}} {...rest}>
          <Text style={styles.text}>{ title}</Text>
    </TouchableOpacity>
  )
}

export default MyButton

const styles = StyleSheet.create({
    btn: {
        backgroundColor:"red",
        padding: scale(10),
        borderRadius: scale(10),
        marginTop: scale(10)
    },
    text: {
        color: 'white',
    }
})