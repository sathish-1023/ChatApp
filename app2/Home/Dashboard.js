import React from 'react'
import { SafeAreaView, View, StatusBar, StyleSheet, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import DrawerNavigator from './DrawerNavigator'
const Dashboard = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      
          <DrawerNavigator />
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
})

export default Dashboard;