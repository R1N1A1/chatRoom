import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { TextInput } from 'react-native-gesture-handler';

const RoomName = (p) => {
    const navigation = useNavigation();
    const username = p.route.params.name;
    const [roomname, setRoomName] = useState('');

  return (
    <View>
      <TextInput 
      placeholder='Room Name'
      style={styles.txt1}
      onChangeText={(data) => setRoomName(data)}
      />
      <TouchableOpacity 
        style={styles.box}
        onPress={() => navigation.navigate('RoomChat', {name: username, roomname: roomname})}
      >
        <Text>Join Room</Text>
      </TouchableOpacity>
    </View>
  )
}

export default RoomName

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