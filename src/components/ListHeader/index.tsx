import React from 'react';
import { Text } from 'react-native';
import { styles } from './style';

const ListHeader = ({ title }: { title: string }) => (
    <Text style={styles.title}>{title}</Text>
);
export default ListHeader;
