import React from 'react';
import { View } from 'react-native';

import TrailsList from '../components/TrailsList'

import DATA from '../data/circular-routes';

const TrailsListingScreen = props => {
    const selectItemHandler = (id, title) => {
        props.navigation.navigate({
            name: 'Route',
            params: {
                trailId: id,
                trailName: title
            }});
      };

    return <View style={{ flex: 1}}>
        <TrailsList
            trails={ DATA }
            onItemSelect={(id, title) => selectItemHandler(id, title)}
        />
    </View>;
};

export default TrailsListingScreen;