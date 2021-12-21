import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import DATA from '../data/circular-routes';


const TrailDetailsScreen = ({ route }) => {
    const trailId = route.params.trailId;

    const trail = DATA.find(item => item.id === trailId);

    return (
        <View style={styles.screen}>
            <Text>Details screen:</Text>
            <Text>{trail.name}</Text>
        </View>
    );
};

export const screenOptions = navData => {
    return {
      headerTitle: navData.route.params.trailName
    };
  };

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default TrailDetailsScreen;