import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Episodes, Home, Locations } from '@screens/index';

export type TabNavigationParam = {
    Characters: undefined;
    Locations: undefined;
    Episodes: undefined;
};
const TabNavigation = () => {
    const Tab = createBottomTabNavigator<TabNavigationParam>();

    return (
        <Tab.Navigator
            screenOptions={({ }) => ({ headerShown: false })}>
            <Tab.Screen name="Characters" component={Home} />
            <Tab.Screen name="Episodes" component={Episodes} />
            <Tab.Screen name="Locations" component={Locations} />
        </Tab.Navigator>
    );
};

export default TabNavigation;
