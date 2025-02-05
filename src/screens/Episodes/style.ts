import { Colors } from '@constants/colors';
import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  scrollList: {
    width: '100%',
    padding: 8,
  },
  g12: {
    gap: 12,
  },
  renderItem: {
    backgroundColor: Colors.black05,
    width: '48%',
    borderRadius: 12,
    padding: 12,
    height: 120,
    gap: 8,
    justifyContent: 'center',
  },
});
