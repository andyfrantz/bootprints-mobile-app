import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TrailDetailsScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>Details screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TrailDetailsScreen;