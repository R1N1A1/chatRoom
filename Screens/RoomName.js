import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { TextInput } from 'react-native-gesture-handler';
import { ScrollView } from 'react-native';
import Roomcard from '../components/Roomcard';
import  db from '../components/firebase-config';
import { setDoc,doc, serverTimestamp, collection, query, orderBy, onSnapshot} from 'firebase/firestore';

const RoomName = (p) => {
    const navigation = useNavigation();
    const username = p.route.params.name;
    const [roomname, setRoomName] = useState('');
    const [roomNames, setRoomNames] = useState([]);
    const senddata=async()=>{
      await setDoc(doc(db, "Rooms", roomname), {
        roomname: roomname,
        createAt:serverTimestamp(),
      }).then(()=>{
        console.log("room created");
        navigation.navigate('RoomChat', {name: username, roomname: roomname})
      });
    }

    useEffect(() => {
      const docRef = collection(db, "Rooms");
      const q = query(docRef, orderBy("createAt", "asc")); // Corrected the typo in orderBy
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const Names = [];
        querySnapshot.forEach((doc) => {
          const roomData = doc.data();
          Names.push(roomData.roomname);
        });
        console.log(Names);
        setRoomNames(Names);
      });
      return () => {
        unsubscribe();
      };
    }, []);


  return (
    <View style={styles.conatiner}>
      <TextInput 
      placeholder='Room Name'
      style={styles.txt1}
      onChangeText={(data) => setRoomName(data)}
      />
      <TouchableOpacity 
        style={styles.box}
        // onPress={() => navigation.navigate('RoomChat', {name: username, roomname: roomname})}
        onPress={senddata}
      >
        <Text>Join Room</Text>
      </TouchableOpacity>
      <ScrollView style={styles.scroll}>
        {
          roomNames.map((roomname) => (
            <Roomcard key={roomname} roomname={roomname} user={username} />
          ))
        }
        {/* <Roomcard  data={roomNames}/> */}
      </ScrollView>
    </View>
  )
}

export default RoomName

const styles = StyleSheet.create({
    conatiner: {
        flex: 1,
        backgroundColor: '#e6e6e6',
        alignItems: 'center',
    },
    txt1:{

        fontSize: 30,
        textAlign: 'center',
        marginTop: 200,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: 'black',
        marginHorizontal: 20,
        padding: 10,
        width: '80%',
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
        width: '60%',
        backgroundColor: 'lightblue',
        marginBottom: 50,
    },
    scroll: {
      // justifyContent: 'center',
      // alignItems: 'center',
      width: '100%',
      height: '100%',
    },
})