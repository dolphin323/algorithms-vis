import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';

type Algorithm = {
  id: string;
  name: string;
  description: string;
};

const algorithms: Algorithm[] = [
  {
    id: '1',
    name: 'Bubble Sort',
    description: 'A simple comparison-based sorting algorithm.',
  },
  {
    id: '2',
    name: 'Merge Sort',
    description: 'A divide and conquer sorting algorithm.',
  },
  {
    id: '3',
    name: 'Dijkstra’s Algorithm',
    description: 'Shortest path algorithm for graphs.',
  },
];

const AlgorithmPreview = ({
  name,
  description,
  onPress,
}: {
  name: string;
  description: string;
  onPress: () => void;
}) => (
  <TouchableOpacity style={styles.card} onPress={onPress}>
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.description}>{description}</Text>
  </TouchableOpacity>
);

const AlgorithmList = ({navigation}: any) => {
  const handleAlgorithmPress = (algorithm: Algorithm) => {
    navigation.navigate('AlgorithmDetail', {algorithm});
  };

  const renderItem = ({item}: {item: Algorithm}) => (
    <AlgorithmPreview
      name={item.name}
      description={item.description}
      onPress={() => handleAlgorithmPress(item)}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={algorithms}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  card: {
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});

export default AlgorithmList;
