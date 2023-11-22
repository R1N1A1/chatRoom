import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from 'expo-status-bar';
import Topbar from '../components/Topbar';
import Chatcard from '../components/Chatcard';
import { ScrollView } from 'react-native-gesture-handler';
import  db  from '../components/firebase-config';
import { addDoc ,collection ,onSnapshot,orderBy,query,serverTimestamp, where} from 'firebase/firestore';

const RoomChat = (p) => {
    // const navigation = useNavigation();
    const username = p.route.params.name;
    const roomname = p.route.params.roomname;
    const [newmsg, setNewmsg] = useState('');
    console.log(username, roomname,newmsg);
    const [chat,setChat] = useState([]);



    useEffect(() => {
        const docRef = collection(db, "Msg");
        const q = query(docRef, 
            where("roomname", "==", roomname),
            orderBy("createdAt", "asc")
            );
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const msgs = [];
            querySnapshot.forEach((doc) => {
                msgs.push({
                    id: doc.id,
                    ...doc.data()
                })
            })
            setChat(msgs);
        });
        return () => {
            unsubscribe();
        }
    }
    ,[]);



    const handlebtn = async() => {
        // console.log('btn clicked');
        if(newmsg === '') {
            alert('Please enter a message');
            return;
        }
        await addDoc(collection(db, "Msg"), 
        {
            username: username,
            roomname: roomname,
            message: newmsg,
            createdAt: serverTimestamp(),
            profile_pic: 'https://images.pexels.com/photos/1036642/pexels-photo-1036642.jpeg?auto=compress&cs=tinysrgb&w=600'
        });
    }


    return (
      <View style={styles.container}>
        <StatusBar/>
        <Topbar page={roomname}/>
     <ScrollView style={styles.scroll}>
     {
        chat.map((message) => {
            return <Chatcard message={message} username={username}/>
        })
      }
     </ScrollView>
      <View style={styles.bottom}>
        <View style={styles.bg}>
            <TextInput
                style={styles.txtbox}
                placeholder='Type a message'
                onChangeText={(e) => setNewmsg(e)}
                // value={newmsg}
            />
            <TouchableOpacity style={styles.send}
            onPress={() => handlebtn()}
            >
                <Text>Send</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default RoomChat

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
    },
    bottom: {
        flex: 1,
        flexDirection: 'row',
        position: 'absolute',
        top: '90%',
        overflow: 'hidden',
        opacity: 1,
    },
    txtbox: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: '70%',
        margin: 10,
        borderRadius: 10,
        paddingLeft: 10,
    },
    send: {
        height: 40,
        width: '20%',
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#00ff00',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bg: {
        backgroundColor: '#fff',
        width: '100%',
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    scroll: {
        width: '100%',
        marginBottom: 90,
        flexDirection: 'column',
    }
})