import React from 'react';
import { View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import TrailsListingScreen  from './screens/TrailsListingScreen';
import TrailDetailsScreen from './screens/TrailDetailsScreen';

import DATA from './data/circular-routes';

const Stack = createNativeStackNavigator();

const App = () => {
    const [loaded] = useFonts({
        'Rufina': require('./assets/fonts/rufina/Rufina-Regular.ttf'),
        'Rufina-Bold': require('./assets/fonts/rufina/Rufina-Bold.ttf'),
        'Montserrat': require('./assets/fonts/montserrat/Montserrat-Regular.ttf'),
        'Montserrat-Bold': require('./assets/fonts/montserrat/Montserrat-Bold.ttf'),
        'ReemKufi': require('./assets/fonts/reemkufi/ReemKufi-Regular.ttf'),
    });

    if (!loaded) {
        return null;
    }

    
  return (
    
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Circular routes" component={TrailsListingScreen} />
            <Stack.Screen name="Route" component={TrailDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
    
  );
}

export default App;
