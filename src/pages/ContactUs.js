import React from 'react';
import { View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';

const contacts = [
  {
    name: 'Perumal',
    phone: '9445520417',
    email: 'sp@fego.in',
  },
  {
    name: 'Praveen',
    phone: '8098912828',
    email: 'praveen@fego.in',
  },
  {
    name: 'Kothanda Raman',
    phone: '9962584838',
    email: 'tsperumal@gmail.com',
  },
];

export default function ContactUs() {
  return (
    <View style={styles.container}>
      {contacts.map((contact, index) => (
        <View key={index} style={styles.card}>
          <View style={styles.contactInfo}>
            <Text style={styles.label}>Name:</Text>
            <Text style={styles.value}>{contact.name}</Text>
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.label}>Phone:</Text>
            <TouchableOpacity onPress={() => Linking.openURL(`tel:${contact.phone}`)}>
              <Text style={[styles.value, styles.link]}>{contact.phone}</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.contactInfo}>
            <Text style={styles.label}>Email:</Text>
            <TouchableOpacity onPress={() => Linking.openURL(`mailto:${contact.email}`)}>
              <Text style={[styles.value, styles.link]}>{contact.email}</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    display:'flex',
    padding: 10,
    // backgroundColor: '#fff',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 10,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  label: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  value: {
    flex: 1,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});
