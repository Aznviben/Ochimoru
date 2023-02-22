import { StyleSheet, View, Text } from "react-native";


import Icon from 'react-native-vector-icons/Octicons';

export default function Footer({ navigation }) {
    return (
        <View style={styles.footer}>
            <Icon 
            name="smiley"
            size={30}
            color="black"
            OnPress ={() => navigation.navigate('Home')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#6a5acd',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.37,
        shadowRadius: 7.49,
        elavation: 12,
        zIndex: 5,
        borderTopWidth: 1,
        borderTopColor: '#14141410'
    },
    text: {
        fontSize: 18,
        fontWeight: '900'
    }
})