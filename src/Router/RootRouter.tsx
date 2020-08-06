import { theme } from '@Definitions/Styled';
import React from 'react';
import SignIn from '@Screens/SignIn';
import SignUp from '@Screens/SignUp';
import Welcome from '@Screens/Welcome';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainDrawerRouter from './MainDrawerRouter';

const Stack = createStackNavigator();

const RootRouter = () => {
    return (
        <>
            <NavigationContainer>
                {/* <Stack.Navigator
                    // headerMode="none"
                    screenOptions={{}}
                    initialRouteName="Welcome">
                    <Stack.Screen name="Welcome" component={Welcome} />
                    <Stack.Screen name="SignIn" component={SignIn} />
                    <Stack.Screen name="SignUp" component={SignUp} />
                </Stack.Navigator> */}
                <MainDrawerRouter />
            </NavigationContainer>
        </>
    );
};
export default RootRouter;
