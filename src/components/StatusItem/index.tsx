import React from 'react';
import {ColorValue, Text, View} from 'react-native';
import {styles} from './style';

interface IStatusItem {
  title: string;
  value: string;
  color: ColorValue;
}

const StatusItem = ({title, value, color}: IStatusItem) => (
  <View style={styles.container}>
    <Text style={styles.valueText}>{value}</Text>
    <View style={styles.bottomContainer}>
      <Text style={{color: color}}>{title}</Text>
    </View>
  </View>
);

export default StatusItem;
