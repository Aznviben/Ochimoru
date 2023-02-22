import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Login({ navigation, GlobalState }) {


    return (
        <View style={styles.screen}>
            <Header/>
            <View style={styles.body}>
                <Text>Login</Text>
            </View>
            <Footer navigation={navigation} />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContext: 'center'
    },
    header: {
        flex: 1,
        width: '100%',
        backgroundColor: 'blue'
    },
    body: {
        flex: 8,
        width: '100%',
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    footer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'green'
    }
})