import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './stacks/MainNavigation';
import { Provider } from 'react-redux';
import { store } from '@store/store';

const Router = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MainNavigation />
      </NavigationContainer>
    </Provider>
  );
};

export default Router;
