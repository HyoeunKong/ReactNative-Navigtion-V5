import * as React from 'react';
import { useTranslation } from 'react-i18next';
import {
    Button,
    View,
    Text,
    StyleSheet,
    Platform,
    TextInput,
    StatusBar,
} from 'react-native';

import { TestAtom } from '@Components/Atoms';

import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAweSome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TouchableRipple } from 'react-native-paper';
import { AuthContext } from '../../../components/context';
import { ISignInScreen } from './SignInScreen.interface';
import { Container, TopText, Middle, Centered } from './styled';

const SignInScreen: React.FunctionComponent<ISignInScreen.IProps> = props => {
    const { navigation } = props;

    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
    });

    const { signIn } = React.useContext(AuthContext);

    const textInputChange = val => {
        if (val.length !== 0) {
            setData({
                ...data,
                username: val,
                check_textInputChange: true,
            });
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,
            });
        }
    };

    const handlePasswordChange = val => {
        setData({
            ...data,
            password: val,
        });
    };

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        });
    };

    const loginHandle = (username: string, password: string) => {
        console.log(username, password);
        signIn(username, password);
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text_header}>Welcome!</Text>
            </View>
            <Animatable.View animation="fadeInUpBig" style={styles.footer}>
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAweSome name="user-o" color="#05375a" size={20} />
                    <TextInput
                        placeholder="Your Email"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={val => textInputChange(val)}
                    />
                    {data.check_textInputChange ? (
                        <Animatable.View animation="bounceIn">
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                    ) : null}
                </View>
                <Text style={styles.errorMsg}>
                    Username must be 4 characters long.
                </Text>
                <Text style={[styles.text_footer, { marginTop: 35 }]}>
                    Password
                </Text>
                <View style={styles.action}>
                    <FontAweSome name="lock" color="#05375a" size={20} />
                    <TextInput
                        placeholder="Your Password"
                        style={styles.textInput}
                        autoCapitalize="none"
                        secureTextEntry={data.secureTextEntry}
                        onChangeText={val => handlePasswordChange(val)}
                    />
                    <TouchableOpacity onPress={updateSecureTextEntry}>
                        {data.secureTextEntry ? (
                            <Feather name="eye-off" color="grey" size={20} />
                        ) : (
                            <Feather name="eye" color="grey" size={20} />
                        )}
                    </TouchableOpacity>
                </View>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        onPress={() => {
                            loginHandle(data.username, data.password);
                        }}>
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}>
                            <Text style={[styles.textSign, { color: '#fff' }]}>
                                Sign In
                            </Text>
                        </LinearGradient>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => navigation.navigate('SignUpScreen')}
                        style={[
                            styles.signIn,
                            {
                                borderColor: '#009387',
                                borderWidth: 1,
                                marginTop: 15,
                            },
                        ]}>
                        <Text style={[styles.textSign, { color: '#009387' }]}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View>
    );
};

export default SignInScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387',
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50,
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30,
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30,
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18,
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5,
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    button: {
        alignItems: 'center',
        marginTop: 50,
    },
    signIn: {
        width: 400,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    errorMsg: {
        fontSize: 12,
        color: 'red',
        marginTop: 3,
    },
});
