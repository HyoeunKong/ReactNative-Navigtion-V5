import { theme } from '@Definitions/Styled';
import React from 'react';
import Home from '@Screens/Home/Home.impl';
import Detail from '@Screens/Detail/Detail.impl';
import DrawerContent from '@Screens/DrawerScreen/DrawerScreen.impl';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';
import MainTab from './MainTab';

const Drawer = createDrawerNavigator();

const DrawerTest = () => {
    return (
        <>
            <NavigationContainer>
                <Drawer.Navigator
                    drawerContent={props => <DrawerContent {...props} />}>
                    <Drawer.Screen name="MainTab" component={MainTab} />
                </Drawer.Navigator>
            </NavigationContainer>
        </>
    );
};
export default DrawerTest;
