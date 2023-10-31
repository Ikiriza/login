import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import LoginScreen from './pages/login'; // Assuming LoginScreen is in the same directory

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <LoginScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
