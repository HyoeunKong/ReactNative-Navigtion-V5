import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { TestAtom } from '@Components/Atoms';
import { Container, TopText, Middle, Centered } from './styled';

import { IMyPage } from './MyPage.interface';

const MyPage: React.FunctionComponent<IMyPage.IProps> = props => {
    const { navigation } = props;
    return (
        <Container key={1}>
            <Middle>
                <Centered>
                    <Text>MyPage Screen</Text>
                </Centered>
            </Middle>
        </Container>
    );
};

export default MyPage;
