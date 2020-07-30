import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { TestAtom } from '@Components/Atoms';
import { Container, TopText, Middle, Centered } from './styled';

import { IHomePage } from './Home.interface';

const Home: React.FunctionComponent<IHomePage.IProps> = props => {
    const { navigation } = props;
    return (
        <Container key={1}>
            <Middle>
                <Centered>
                    <Text>Home Screen</Text>
                    <Button
                        title="Go to Detail"
                        onPress={() => navigation.navigate('Detail')}
                    />
                </Centered>
            </Middle>
        </Container>
    );
};

export default Home;
