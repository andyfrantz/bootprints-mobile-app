import React from 'react';
import { View, Text } from 'react-native';

import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import TrailsListingScreen  from './screens/TrailsListingScreen';
import TrailDetailsScreen, {
  screenOptions as trailDetailsScreenOptions
} from './screens/TrailDetailsScreen';
import COLORS from './constants/colors';

import DATA from './data/circular-routes';


const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? COLORS.primaryColor : ''
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : COLORS.primaryColor
};

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
          <Stack.Navigator screenOptions={defaultNavOptions}>
            <Stack.Screen name="Circular routes" component={TrailsListingScreen} />
            <Stack.Screen name="Route" component={TrailDetailsScreen} options={trailDetailsScreenOptions}/>
          </Stack.Navigator>
        </NavigationContainer>
    
  );
}

export default App;
