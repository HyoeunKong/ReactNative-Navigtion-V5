import { theme } from '@Definitions/Styled';
import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import Home from '@Screens/Home/Home.impl';
import Detail from '@Screens/Detail/Detail.impl';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '@Screens/Profile';
import Explore from '@Screens/Explore';
import Icon from 'react-native-vector-icons/Ionicons';
import { Button } from 'react-native-paper';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const StackTest = ({ navigation }) => {
    const Stack = createStackNavigator();
    // const Drawer = createDrawerNavigator();

    const LogoTitle = () => {
        return (
            <Image
                style={{ width: 130, height: 40, marginTop: 10 }}
                source={require('../Assets/Common/logo.png')}
            />
        );
    };
    return (
        <>
            <Stack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f7f9fb',
                    },
                    headerTitle: props => <LogoTitle {...props} />,

                    headerLeft: () => (
                        <View
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{
                                marginLeft: 30,
                                width: 30,
                                height: 30,
                                borderRadius: 50,
                                backgroundColor: '#f7f9fb', //  배경색 설정 필요
                                ...Platform.select({
                                    ios: {
                                        shadowColor: 'gray',
                                        shadowOpacity: 0.5,
                                        shadowRadius: 5,
                                        shadowOffset: {
                                            height: 5,
                                            width: 5,
                                        },
                                    },
                                    android: {
                                        elevation: 10,
                                    },
                                }),
                            }}>
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.openDrawer();
                                }}
                                activeOpacity={0.5}
                                style={{
                                    width: 30,
                                    height: 30,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Image
                                    style={{ width: 15, height: 15 }}
                                    source={require('../Assets/Common/menu.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                    headerRight: () => (
                        <View
                            // eslint-disable-next-line react-native/no-inline-styles
                            style={{
                                marginRight: 30,
                                width: 30,
                                height: 30,
                                borderRadius: 50,
                                backgroundColor: '#f7f9fb', //  배경색 설정 필요
                                ...Platform.select({
                                    ios: {
                                        shadowColor: 'gray',
                                        shadowOpacity: 0.5,
                                        shadowRadius: 5,
                                        shadowOffset: {
                                            height: 5,
                                            width: 5,
                                        },
                                    },
                                    android: {
                                        elevation: 10,
                                    },
                                }),
                            }}>
                            <TouchableOpacity
                                activeOpacity={0.5}
                                style={{
                                    width: 30,
                                    height: 30,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <Image
                                    style={{ width: 15, height: 20 }}
                                    source={require('../Assets/Common/bell.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    ),
                }}>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerTransparent: true }}
                />
                <Stack.Screen name="Detail" component={Detail} />
                <Stack.Screen name="Profile" component={Profile} />
                <Stack.Screen name="Explore" component={Explore} />
            </Stack.Navigator>
        </>
    );
};
export default StackTest;
