import React from 'react';
import { View, StyleSheet } from 'react-native';
import Header from './src/components/header';
import Footer from './src/components/footer';
import BodyPage from './src/components/bodypage';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Header */}
      <Header name="Nocete" />

      {/* Content Area */}
      <View style={styles.content}>
        <BodyPage />
      </View>

      {/* Footer */}
      <Footer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1, // pushes footer to bottom
  },
});