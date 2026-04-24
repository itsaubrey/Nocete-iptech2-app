import React from 'react';
import { View, Image, StyleSheet, ScrollView } from 'react-native';

const images = [
{
  id: 1,
  uri: 'https://picsum.photos/seed/a/400/200',
},
{
  id: 2,
  uri: 'https://picsum.photos/seed/b/400/200',
},
{
  id: 3,
  uri: 'https://picsum.photos/seed/c/400/200',
},
{
  id: 4,
  uri: 'https://picsum.photos/seed/d/400/200',
},
];

const BodyPage = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {images.map((item) => (
        <Image
          key={item.id}
          source={{ uri: item.uri }}
          style={styles.image}
        />
      ))}
    </ScrollView>
  );
};

export default BodyPage;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
});