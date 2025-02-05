import { Colors } from '@constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black05,
    height: 250,
    justifyContent: 'flex-start',
    padding: 8,
    borderRadius: 8,
    gap: 8,
  },
  image: {
    flex: 1,
    height: 24,
    borderRadius: 8,
  },
  name: {
    fontWeight: '500',
    fontSize: 18,
  },
});
