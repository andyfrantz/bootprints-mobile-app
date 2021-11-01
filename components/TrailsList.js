import React from 'react';
import { FlatList } from 'react-native';

import TrailsItem from './TrailsItem';

const renderItem = ({ item }) => (
    <TrailsItem
        title={item.name}
        location={item.location}
        distance={item.distance}
        region={item.region}
        level={item.level}
        onSelect={() => props.onItemSelect()}
    />
);

const TrailsList = props => {
    return <FlatList
        data={props.trails}
        renderItem={ ({ item }) => (
            <TrailsItem
                title={item.name}
                location={item.location}
                distance={item.distance}
                region={item.region}
                level={item.level}
                onSelect={() => props.onItemSelect()}
            />
        )}
    />
};

export default TrailsList;