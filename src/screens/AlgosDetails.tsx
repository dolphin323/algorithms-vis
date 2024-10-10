import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AlgorithmDetail = ({route}: any) => {
  const {algorithm} = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{algorithm.name}</Text>
      <Text style={styles.description}>{algorithm.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 8,
  },
});

export default AlgorithmDetail;
