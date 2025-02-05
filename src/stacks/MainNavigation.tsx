import React from 'react';
import Home from '@screens/Home';
import TabNavigation from './TabNavigation';
import { Character } from '@models/character';
import CharacterDetails from '@screens/CharacterDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type MainNavigationParam = {
    Home: undefined;
    Home2: undefined;
    Home3: undefined;
    CharacterDetail: {
        character: Character;
    };
    Tabs: undefined;
};

const MainNavigation = () => {
    const Stack = createNativeStackNavigator<MainNavigationParam>();

    return <Stack.Navigator screenOptions={({ route }) => ({
        headerShown: route.name === 'CharacterDetail',
    })}>
        <Stack.Screen name="Tabs" component={TabNavigation} />
        <Stack.Screen name="CharacterDetail" component={CharacterDetails} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Home2" component={Home} />
        <Stack.Screen name="Home3" component={Home} />
    </Stack.Navigator>;
};

export default MainNavigation;
