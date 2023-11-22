import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Topbar = ({page}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt1}>{page}</Text>
    </View>
  )
}

export default Topbar

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        height: 50,
        width: '100%',
        backgroundColor: '#F0DBAF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    txt1: {
        fontSize: 18,
        fontWeight: 'bold',
    },
})