import React from 'react';
import {RouteProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Header from 'components/organism/Header';

import Introduction from 'components/page/IntroductionScreen';
import {ILoginStackParamList} from 'navigation/type';
import {loginStackMenu} from 'constants/navigation';

const Stack = createStackNavigator<ILoginStackParamList>();

const LoginStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={loginStackMenu.introduction.name}>
      <Stack.Screen
        name={loginStackMenu.introduction.name}
        component={Introduction}
      />
    </Stack.Navigator>
  );
};

export default LoginStack;
