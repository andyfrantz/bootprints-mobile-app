import React from 'react';
import { View } from 'react-native';

import TrailsList from '../components/TrailsList'

import DATA from '../data/circular-routes';

const TrailsListingScreen = props => {
    const selectItemHandler = () => {
        props.navigation.navigate('Route');
      };

    return <View style={{ flex: 1}}>
        <TrailsList
            trails={ DATA }
            onItemSelect={() => selectItemHandler()}
        />
    </View>;
};

export default TrailsListingScreen;