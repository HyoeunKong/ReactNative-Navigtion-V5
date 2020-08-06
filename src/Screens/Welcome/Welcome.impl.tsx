import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, View, Text } from 'react-native';

import { TestAtom } from '@Components/Atoms';
import { Container, TopText, Middle, Centered } from './styled';

import { IWelcome } from './Welcome.interface';

const Welcome: React.FunctionComponent<IWelcome.IProps> = props => {
    const { navigation } = props;
    return (
        <Container key={1}>
            <Middle>
                <Centered>
                    <Button
                        title="Sign In"
                        onPress={() => {
                            navigation.navigate('SignIn');
                        }}
                    />
                    <Button
                        title="Sign Up"
                        onPress={() => {
                            navigation.navigate('SignUp');
                        }}
                    />
                </Centered>
            </Middle>
        </Container>
    );
};

export default Welcome;
