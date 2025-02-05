import React from 'react';
import TabNavigation from './TabNavigation';
import { Character } from '@models/character';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CharacterDetails } from '@screens/index';

export type MainNavigationParam = {
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
    </Stack.Navigator>;
};

export default MainNavigation;
