import { theme } from '@Definitions/Styled';
import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import GoldTrain from '@Screens/GoldTrain';
import MyOrg from '@Screens/MyOrg';
import MyPage from '@Screens/MyPage';
import Notice from '@Screens/Notice';
import CS from '@Screens/CS';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import DrawerContent from '@Screens/DrawerScreen/DrawerScreen.impl';

// import { createDrawerNavigator } from '@react-navigation/drawer';

// const MainStack = ({ navigation }) => {
//     const Stack = createStackNavigator();

//     // const Drawer = createDrawerNavigator();

//     const LogoTitle = () => {
//         return (
//             <View
//                 style={{
//                     alignItems: 'center',
//                     flex: 1,
//                     justifyContent: 'center',
//                 }}>
//                 <Image
//                     style={{ width: 130, height: 30 }}
//                     source={require('../Assets/images/Common/logo.png')}
//                 />
//             </View>
//         );
//     };
//     return (
//         <>
//             <Stack.Navigator
//                 initialRouteName="MyPage"
//                 screenOptions={{
//                     headerStyle: {},
//                     headerTitleStyle: { justifyContent: 'center' },
//                     headerTitle: props => <LogoTitle {...props} />,

//                     headerLeft: () => (
//                         <View
//                             // eslint-disable-next-line react-native/no-inline-styles
//                             style={{
//                                 marginLeft: 30,
//                                 width: 30,
//                                 height: 30,
//                                 borderRadius: 50,
//                                 backgroundColor: '#f7f9fb', //  배경색 설정 필요
//                                 ...Platform.select({
//                                     ios: {
//                                         shadowColor: 'gray',
//                                         shadowOpacity: 0.5,
//                                         shadowRadius: 5,
//                                         shadowOffset: {
//                                             height: 5,
//                                             width: 5,
//                                         },
//                                     },
//                                     android: {
//                                         elevation: 10,
//                                     },
//                                 }),
//                             }}>
//                             <TouchableOpacity
//                                 onPress={() => {
//                                     navigation.openDrawer();
//                                 }}
//                                 activeOpacity={0.5}
//                                 style={{
//                                     width: 30,
//                                     height: 30,
//                                     display: 'flex',
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                 }}>
//                                 <Image
//                                     style={{ width: 12, height: 15 }}
//                                     source={require('../Assets/images/Common/menu.png')}
//                                 />
//                             </TouchableOpacity>
//                         </View>
//                     ),
//                     headerRight: () => (
//                         <View
//                             // eslint-disable-next-line react-native/no-inline-styles
//                             style={{
//                                 marginRight: 30,
//                                 width: 30,
//                                 height: 30,
//                                 borderRadius: 50,
//                                 backgroundColor: '#f7f9fb', //  배경색 설정 필요
//                                 ...Platform.select({
//                                     ios: {
//                                         shadowColor: 'gray',
//                                         shadowOpacity: 0.5,
//                                         shadowRadius: 5,
//                                         shadowOffset: {
//                                             height: 5,
//                                             width: 5,
//                                         },
//                                     },
//                                     android: {
//                                         elevation: 10,
//                                     },
//                                 }),
//                             }}>
//                             <TouchableOpacity
//                                 activeOpacity={0.5}
//                                 style={{
//                                     width: 30,
//                                     height: 30,
//                                     display: 'flex',
//                                     justifyContent: 'center',
//                                     alignItems: 'center',
//                                 }}>
//                                 <Image
//                                     style={{ width: 12, height: 15 }}
//                                     source={require('../Assets/images/Common/bell.png')}
//                                 />
//                             </TouchableOpacity>
//                         </View>
//                     ),
//                 }}
//             />
//         </>
//     );
// };

const MainDrawerRouter = () => {
    const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator
            initialRouteName="MyPage"
            drawerStyle={{ backgroundColor: 'transparent' }}
            drawerContent={props => <DrawerContent {...props} />}>
            <Drawer.Screen name="GoldTrain" component={GoldTrain} />
            <Drawer.Screen name="MyOrg" component={MyOrg} />
            <Drawer.Screen name="MyPage" component={MyPage} />
            <Drawer.Screen name="Notice" component={Notice} />
            <Drawer.Screen name="CS" component={CS} />
        </Drawer.Navigator>
    );
};

export default MainDrawerRouter;
