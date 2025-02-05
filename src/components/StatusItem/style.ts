import { Colors } from '@constants/colors';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.black5,
        width: '48%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 124,
        borderRadius: 8,
    },
    valueText: {
        paddingHorizontal: 8,
        textAlign: 'center',
        marginBottom: 24,
    },
    bottomContainer: {
        backgroundColor: Colors.black8,
        width: '100%',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderBottomRightRadius: 8,
        borderBottomLeftRadius: 8,
        paddingVertical: 12,
    },
});
