import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';

import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function Home({ navigation, GlobalState }) {
    const { stats, setStats, name, health, hunger } = GlobalState;

    useEffect(() => {
        setStats(prevState => [...prevState, { id: 2, name: 'Ben', health: 100, hunger: 50}])
    }, [])

    const handleStats = () => {
        const index = stats.length + 1;

        setStats(prevState => [...prevState, { id: 2, name: 'Ben', health: 100, hunger: 50}]);

    }

    const handleLogOut = () => {
        navigation.navigate('Login');
    }

    return (
        <View style={styles.screen}>
            <Header />
            <View style={styles.body}>
                <Text>Howdy Home!</Text>
            </View>
            <Footer />
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
        backgroundColor: '#6a5acd'
    },
    footer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'green'
    }
})