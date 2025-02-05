import { Dimensions, StyleSheet } from 'react-native';
const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    listHeaderComponent: {
        height: 'auto',
        marginBottom: 0,
        paddingBottom: 0,
    },
    contentContainer: {
        gap: 12,
    },
    container: {
        backgroundColor: 'white',
    },
    columnWrapper: {
        flex: 1,
        justifyContent: 'space-between',
        padding: 8,
    },
    footerCompontentContainer: {
        height: height * 0.15,
        paddingLeft: 8,
    },
    footerCompontentItem: {
        width: 256,
        height: '100%',
        backgroundColor: 'blue',
        borderRadius: 12,
    },
    g4: {
        gap: 4,
    },
    image: {
        width: '100%',
        aspectRatio: 1.0,
    },
});
