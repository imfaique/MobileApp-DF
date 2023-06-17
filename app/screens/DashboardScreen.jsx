import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Driver Dashboard</Text>
      <Text> Driver Dashboard !</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: '#F5F5F5',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: "white",
  },
});

export default DashboardScreen;