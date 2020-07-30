import { theme } from '@Definitions/Styled';
import React from 'react';
import Home from '@Screens/Home/Home.impl';
import Detail from '@Screens/Detail/Detail.impl';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const StackTest = () => {
    const Stack = createStackNavigator();
    // const Drawer = createDrawerNavigator();
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#009387',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                            fontWeight: 'bold',
                        },
                    }}>
                    <Stack.Screen
                        name="Home"
                        component={Home}
                        options={{ title: 'OverView' }}
                    />
                    <Stack.Screen name="Detail" component={Detail} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};
export default StackTest;
