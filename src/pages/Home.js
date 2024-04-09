import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import ListProperty from '../components/ListProperty'

export default function Home() {

  return (
    <ScrollView>
      <View>
        <ListProperty />
      </View>
    </ScrollView>
  )
}