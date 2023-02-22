import { StyleSheet, View, Text } from "react-native";
import Constants from 'expo-constants';

export default function Header() {
    return (
        <View style={styles.header}>
            <Text style={styles.text}>Ochimoru head</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        paddingTop: Constants.statusBarHeight,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elavation: 4,
        zIndex: 5
    },
    text: {
        fontSize: 18,
        fontWeight: '900'
    }
})