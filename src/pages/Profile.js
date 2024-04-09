import { View, Text, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
const windowWidth = Dimensions.get('window').width;
export default function Profile() {
  return (
    <View style={styles.container} >
        <View style={styles.card} >
        <Text>Profile</Text>
        </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    card: {
      backgroundColor: '#fff',
      borderRadius: 10,
      overflow: 'hidden',
      marginBottom: 20,
      elevation: 10,
      padding:10,
      width: windowWidth/1.1,
      minHeight: 120, 
 
    },
  });
  