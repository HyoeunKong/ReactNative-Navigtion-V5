import { theme } from '@Definitions/Styled';
import React from 'react';

import Home from '@Screens/Home/Home.impl';
import Detail from '@Screens/Detail/Detail.impl';
import DrawerContent from '@Screens/DrawerScreen/DrawerScreen.impl';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native-animatable';
import { ActivityIndicator } from 'react-native-paper';

import { AsyncStorage } from 'react-native';
import MainTab from './MainTab';
import RootStackScreen from './RootStackScreen';

import { AuthContext } from '../../components/context';

const Drawer = createDrawerNavigator();

const DrawerTest = () => {
    // const [isLoading, setIsLoading] = React.useState(true);
    // const [userToken, setUserToken] = React.useState(null);

    const initialLoginState = {
        isLoading: true,
        userName: null,
        userToken: null,
        isValidUser: true,
        isValidPassword: true,
    };

    const loginReducer = (prevState, action) => {
        // eslint-disable-next-line default-case
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    userName: null,
                    userToken: null,
                    isLoading: false,
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    userName: action.id,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    };

    const [loginState, dispatch] = React.useReducer(
        loginReducer,
        initialLoginState
    );

    const authContext = React.useMemo(
        () => ({
            signIn: async (username, password) => {
                // setUserToken('fgkj');
                // setIsLoading(false);
                let userToken;
                userToken = null;
                console.log(username, password, 'd');

                if (username === 'user' && password === 'pass') {
                    try {
                        userToken = 'dfdfdf';
                        await AsyncStorage.setItem('userToken', userToken);
                    } catch (e) {
                        console.log(e);
                    }
                }
                dispatch({ type: 'LOGIN', id: username, token: userToken });
            },
            signOut: async () => {
                try {
                    await AsyncStorage.removeItem('userToken');
                } catch (e) {
                    console.log(e);
                }
                dispatch({ type: 'LOGOUT' });
            },
            signUp: () => {
                setUserToken('fgkj');
                setIsLoading(false);
            },
        }),
        []
    );
    // 변경되는 값이 없다면 한번만 실행후 값을 보관하는 역할

    React.useEffect(() => {
        setTimeout(async () => {
            let userToken;
            userToken = null;
            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: 'REGISTER', token: userToken });
        }, 1000);
    }, []);

    if (loginState.isLoading) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ActivityIndicator size="large" />
            </View>
        );
    }
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {loginState.userToken !== null ? (
                    <Drawer.Navigator
                        drawerContent={props => <DrawerContent {...props} />}>
                        <Drawer.Screen name="MainTab" component={MainTab} />
                    </Drawer.Navigator>
                ) : (
                    <RootStackScreen />
                )}
            </NavigationContainer>
        </AuthContext.Provider>
    );
};
export default DrawerTest;
