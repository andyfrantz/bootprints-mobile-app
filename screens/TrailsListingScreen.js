import React from 'react';
import { View } from 'react-native';

const TrailsListingScreen = props => {
    return <View>
        <TrailsList
            trails={props.trails}
        />
    </View>;
};

export default TrailsListing;