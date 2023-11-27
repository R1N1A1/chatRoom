import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from "@react-navigation/native";

const Roomcard = (data,user) => {
  const navigation = useNavigation();
  console.log(user);
  return (
    <View>
        {/* <Text style={styles.txt}>{user}</Text> */}
        <TouchableOpacity
          style={styles.touch}
        >
          <Text style={styles.txt}>{data.roomname}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Roomcard

const styles = StyleSheet.create({
  touch:{
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    marginHorizontal: 20,
    padding: 10,
    marginTop: 5,
    alignItems: 'center',
    width: '90%',
    marginBottom: 5
  },
  txt: {
    fontSize: 15,
    textAlign: 'center',
    width: '100%',
  },
})