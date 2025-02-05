import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from '@screens/Home';

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
            <Tab.Screen name="Locations" component={Home} />
            <Tab.Screen name="Episodes" component={Home} />
        </Tab.Navigator>
    );
};

export default TabNavigation;
