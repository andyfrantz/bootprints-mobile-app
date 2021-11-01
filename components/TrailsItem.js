import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import IconRegion from './IconRegion';
import IconDifficulty from './IconDifficulty';

import DifficultyMeduim from '../assets/images/difficulty/medium.svg';

const TrailsItem = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <TouchableCmp onPress={props.onSelect}>
            <View style={styles.item}>
                <View style={styles.itemCol}>
                    <Text style={styles.title1}>Auto-pédestre trail</Text>
                    <Text style={styles.title}>{props.title}</Text>
                    <View style={styles.secondRow}>
                        <Text style={styles.details}><MaterialCommunityIcons name="home-city-outline" size={20} color="black" /> {props.location}</Text>
                        <Text style={styles.details}><MaterialCommunityIcons name="map-marker-distance" size={20} color="black" /> {props.distance}km</Text>
                        <IconDifficulty name={props.level} height={18} />
                    </View>
                </View>
                <IconRegion name={props.region} height={75} />
            </View>
        </TouchableCmp>
    );
};

const styles = StyleSheet.create({
    item: {
        padding: 10,
        marginVertical: 0,
        marginHorizontal: 0,
        borderColor: '#cccccc',
        borderBottomWidth: 1,
        flexDirection: 'row',
        flex: 1
    },
    itemCol: {
        flexDirection: 'column',
        flex: 1,
        marginRight: 10

    },
    title: {
        color: 'black',
        fontSize: 28,
        fontFamily: 'Rufina-Bold'
    },
    title1: {
        color: '#5c5c5c',
        fontSize: 12,
        fontFamily: 'Montserrat'
    },
    secondRow: {
        marginTop: 5,
        marginRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    details: {
        color: 'black',
        fontFamily: 'Montserrat'
    }
});

export default TrailsItem;