import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch,
} from 'react-native-paper';

import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { IDrawerScreen } from './DrawerScreen.interface';

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,

        paddingTop: 20,
    },
    userInfoSection: {
        paddingLeft: 20,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    caption: {
        fontSize: 14,
        lineHeight: 14,
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15,
    },
    paragraph: {
        fontWeight: 'bold',
        marginRight: 3,
    },
    drawerSection: {
        marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1,
    },
    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
    },
});
const DrawerScreen: React.FunctionComponent<IDrawerScreen.IProps> = props => {
    const { navigation } = props;

    return (
        <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)' }}>
            <View style={styles.drawerContent}>
                <View style={styles.userInfoSection}>
                    <View style={{ flexDirection: 'row', margionTop: 15 }}>
                        <Avatar.Image
                            source={{
                                uri:
                                    'https://img1.daumcdn.net/thumb/R720x0.q80/?scode=mtistory2&fname=http%3A%2F%2Fcfile5.uf.tistory.com%2Fimage%2F26157D3F5901C2C41F91A3',
                            }}
                            size={50}
                        />
                        <View
                            style={{
                                marginLeft: 15,
                                flexDirection: 'column',
                            }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#fff',
                                }}>
                                Silver
                            </Text>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: 'bold',
                                    color: '#fff',
                                }}>
                                홍길동
                            </Text>
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        borderTopColor: 'rgba(255,255,255,0.3)',
                        borderTopWidth: 0.5,
                        borderBottomColor: 'rgba(255,255,255,0.3)',
                        borderBottomWidth: 0.5,
                        height: 200,
                        marginTop: 20,
                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            borderBottomColor: 'rgba(255,255,255,0.3)',
                            borderBottomWidth: 0.5,
                            height: 100,
                        }}>
                        <View
                            style={{
                                borderRightColor: 'rgba(255,255,255,0.3)',
                                borderRightWidth: 0.5,
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <TouchableOpacity style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 10, color: '#fff' }}>
                                    파트너
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 23,
                                        fontWeight: 'bold',
                                        color: '#fff',
                                    }}>
                                    8명
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <TouchableOpacity style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 10, color: '#fff' }}>
                                    환승
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 23,
                                        fontWeight: 'bold',
                                        color: '#fff',
                                    }}>
                                    3회
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 100,
                        }}>
                        <View
                            style={{
                                borderRightColor: 'rgba(255,255,255,0.3)',
                                borderRightWidth: 0.5,
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <TouchableOpacity style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 10, color: '#fff' }}>
                                    누적 보너스
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 23,
                                        fontWeight: 'bold',
                                        color: '#fff',
                                    }}>
                                    54.5g
                                </Text>
                            </TouchableOpacity>
                        </View>
                        <View
                            style={{
                                flex: 1,
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            <TouchableOpacity style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: 10, color: '#fff' }}>
                                    보유 보너스
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 23,
                                        fontWeight: 'bold',
                                        color: '#fff',
                                    }}>
                                    5.2g
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <View
                    style={{
                        height: 50,
                        borderBottomColor: '#fff',
                        borderBottomWidth: 0.5,
                        paddingHorizontal: 20,
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('GoldTrain');
                        }}
                        style={{
                            height: 50,
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: 'bold',
                                color: '#fff',
                            }}>
                            Gold Train
                        </Text>
                        <Image
                            style={{ width: 15, height: 15 }}
                            source={require('../../Assets/images/Common/arrow.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: 50,
                        borderBottomColor: '#fff',
                        borderBottomWidth: 0.5,
                        paddingHorizontal: 20,
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('MyOrg');
                        }}
                        style={{
                            height: 50,
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: 'bold',
                                color: '#fff',
                            }}>
                            My 계보도
                        </Text>
                        <Image
                            style={{ width: 15, height: 15 }}
                            source={require('../../Assets/images/Common/arrow.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: 50,
                        borderBottomColor: '#fff',
                        borderBottomWidth: 0.5,
                        paddingHorizontal: 20,
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('MyPage');
                        }}
                        style={{
                            height: 50,
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: 'bold',
                                color: '#fff',
                            }}>
                            My 페이지
                        </Text>
                        <Image
                            style={{ width: 15, height: 15 }}
                            source={require('../../Assets/images/Common/arrow.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: 50,
                        borderBottomColor: '#fff',
                        borderBottomWidth: 0.5,
                        paddingHorizontal: 20,
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('Notice');
                        }}
                        style={{
                            height: 50,
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: 'bold',
                                color: '#fff',
                            }}>
                            공지사항
                        </Text>
                        <Image
                            style={{ width: 15, height: 15 }}
                            source={require('../../Assets/images/Common/arrow.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: 50,
                        borderBottomColor: '#fff',
                        borderBottomWidth: 0.5,
                        paddingHorizontal: 20,
                        justifyContent: 'center',
                    }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate('CS');
                        }}
                        style={{
                            height: 50,
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                        }}>
                        <Text
                            style={{
                                fontSize: 15,
                                fontWeight: 'bold',
                                color: '#fff',
                            }}>
                            고객센터
                        </Text>
                        <Image
                            style={{ width: 15, height: 15 }}
                            source={require('../../Assets/images/Common/arrow.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default DrawerScreen;
