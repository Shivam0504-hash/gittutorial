import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from './src/Header'
import Bottom from './src/Bottom'


const App = () => {
  return (
    <SafeAreaView>
      <Text>App</Text>
      <Header/>
      <Bottom/>
      </SafeAreaView>
    
  )
}

export default App

const styles = StyleSheet.create({})