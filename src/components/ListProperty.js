import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, Button, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const properties = [
  {
    id: 1,
    title: 'Beautiful House 1',
    description: 'A spacious house with a stunning view',
    imageUrl: 'https://picsum.photos/200/300?grayscale'
  },
  {
    id: 2,
    title: 'Beautiful House 2',
    description: 'Another spacious house with a stunning view',
    imageUrl: 'https://picsum.photos/id/870/200/300'
  },
  {
    id: 3,
    title: 'Beautiful House 2',
    description: 'Another spacious house with a stunning view',
    imageUrl: 'https://picsum.photos/200/300'
  },
  {
    id: 4,
    title: 'Beautiful House 2',
    description: 'Another spacious house with a stunning viewtrytrytryryryrytrytry',
    imageUrl: 'https://picsum.photos/id/237/200/300'
  },
    {
    id: 5,    
    title: 'Beautiful House 1',
    description: 'Another spacious ',
    imageUrl: 'https://picsum.photos/seed/picsum/200/300'
  },
  // Add more properties as needed
];
export default function ListProperty() {
  return (
    <View style={styles.container}>
    {/* <ScrollView > */}
   
     
      {properties.map(property => (
        <View  key={property.id} style={styles.card}>
          <Image
            source={{uri: property.imageUrl}}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.cardContent}>
            <Text style={styles.title}>{property.title}</Text>
            <Text style={styles.subTitle}>Property ID : {property.title}</Text>
            <Text style={styles.subTitle}>Posted : {property.title}</Text>
            <Text style={styles.subTitle}>Property Type : {property.title}</Text>
            <Text style={styles.subTitle}>Base Price : {property.title}</Text>
            <Text style={styles.subTitle}>Location : {property.title}</Text>
            <Text style={styles.subTitle}>Highest Bid : {property.title}</Text>
            {/* <Text style={styles.description}>{property.description}</Text> */}
          </View>
          <View style={styles.divider} />

          <View style={styles.buttonContainer}>
    <Button color={'#E60023'} title="VIEW DETAILS" onPress={() => handleButton1Press(property.id)} />
    <Button color={'#E60023'} title="BID NOW" onPress={() => handleButton2Press(property.id)} />
  </View>
        </View>
      ))}

     
        {/* </ScrollView> */}
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fbf6fa',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    // backgroundColor: 'green',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 10,
    padding:16,
    width: windowWidth/1.1,
    minHeight: 300, // Minimum height for the card
    // paddingTop: 15,
    // paddingBottom:20,
    // paddingLeft:13,
    // paddingRight:13
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
  },
  cardContent: {
    // padding: 13,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',  // Align buttons in the same row
    justifyContent: 'space-between', // Spread buttons evenly in the row
    // paddingHorizontal: 20, // Adjust spacing as needed
    marginTop: 10, // Adjust spacing as needed
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    marginVertical: 10, // Adjust spacing as needed
  },
});
