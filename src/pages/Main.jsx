import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Router from '../routers';

const Main = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default Main;
