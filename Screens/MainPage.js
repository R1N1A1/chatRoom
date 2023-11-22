import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { TextInput } from 'react-native-gesture-handler';

const MainPage = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('')
  return (
    <View>
      <TextInput 
      placeholder='UserName'
      style={styles.txt1}
      onChangeText={(data) => setUsername(data)}
      />
      <TouchableOpacity 
        style={styles.box}
        onPress={() => navigation.navigate('RoomName', {name: username})}
      >
        <Text>Submit</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({
    txt1:{
        fontSize: 30,
        textAlign: 'center',
        marginTop: 200,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        marginHorizontal: 20,
        padding: 10,
    },
    box: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        marginHorizontal: 20,
        padding: 10,
        marginTop: 50,
        alignItems: 'center',
    },
})