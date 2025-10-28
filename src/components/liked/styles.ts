import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        width: width * 0.4,
        height: width * 0.5,
        marginVertical: width * 0.02,
        padding: width * 0.025,
        backgroundColor: 'gray',
        borderRadius: 8,
        marginRight: width * 0.12
    },
    title: {
        fontSize: width * 0.05,
        margin: width * 0.04
    },
    list: {
        marginTop: width * 0.04,
        marginHorizontal: width * 0.04,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: width * 0.03
    },
    img: {
        width: width * 0.15,
        height: width * 0.15,
        borderRadius: '50%',
        backgroundColor: "#F8F"
    },
    column: {
        flex: 1,
    },
})