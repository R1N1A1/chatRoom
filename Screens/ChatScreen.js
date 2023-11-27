import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import db from '../components/firebase-config'
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
import { TouchableOpacity } from 'react-native';


const ChatScreen = (p) => {
    const navigation = useNavigation();
    const username = p.route.params.name;
    // const roomname = p.route.params.roomname;
    const data=async()=>{
        console.log(username);
        const docRef = doc(db, "/Student/", username)
        const docSnap = await getDoc(docRef);
        console.log(docSnap);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.text);
            // navigation.navigate('RoomChat', {name: username, : roomname})
          } else {
            console.log("No such document!");
            alert('No such document!')
          }
    }
    // data();


  return (
    <View>
      <Text>ChatScreen</Text>
      <TouchableOpacity
        onPress={()=>data()}
      >
        <Text>Click mE Plz</Text>
      </TouchableOpacity>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({})