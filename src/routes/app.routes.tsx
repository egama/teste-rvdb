import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import List from '../pages/List';
import ViewScreen from '../pages/View';


const AppStack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <AppStack.Navigator>
    <AppStack.Screen name="List" component={List} />
    <AppStack.Screen name="View" component={ViewScreen} />
  </AppStack.Navigator>
);

export default AppRoutes;