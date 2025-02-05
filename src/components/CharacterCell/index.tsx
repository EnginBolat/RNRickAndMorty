import React from 'react';
import { Character } from '@models/character';
import { Image, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

const CharacterCell = ({ item, onPress }: { item: Character, onPress?: () => void }) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Image
      source={{ uri: item.image }}
      style={styles.image}
      resizeMode="stretch"
    />
    <Text style={styles.name}>{item.name}</Text>
    <Text>Status: {item.status}</Text>
  </TouchableOpacity>
);

export default CharacterCell;
