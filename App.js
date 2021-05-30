import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { useFonts } from 'expo-font';

import TrailsList from './components/TrailsList'

import DATA from './data/circular-routes';

const App = () => {
    const [loaded] = useFonts({
        'Rufina': require('./assets/fonts/rufina/Rufina-Regular.ttf'),
        'Rufina-Bold': require('./assets/fonts/rufina/Rufina-Bold.ttf'),
        'Montserrat': require('./assets/fonts/montserrat/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('./assets/fonts/montserrat/Montserrat-Bold.ttf'),
    });

    if (!loaded) {
        return null;
    }

  return (
      <SafeAreaView style={styles.container}>
        <TrailsList
            trails={DATA}
        />
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },


});

export default App;