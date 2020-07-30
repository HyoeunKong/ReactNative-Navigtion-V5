import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, View, Text } from 'react-native';

import { TestAtom } from '@Components/Atoms';
import { Container, TopText, Middle, Centered } from './styled';

import { IDetail } from './Profile.interface';

const Profile: React.FunctionComponent<IProfile.IProps> = props => {
    const { navigation } = props;
    return (
        <Container key={1}>
            <Middle>
                <Centered>
                    <Text>profile screen</Text>
                    <Button
                        title="Go to Detail(push)"
                        onPress={() => navigation.push('Detail')}
                    />
                    <Button
                        title="Go to home(navigate)"
                        onPress={() => navigation.navigate('Home')}
                    />
                    <Button
                        title="Go to back(go back)"
                        onPress={() => navigation.goBack()}
                    />
                    <Button
                        title="Go to first"
                        onPress={() => navigation.popToTop()}
                    />
                </Centered>
            </Middle>
        </Container>
    );
};

export default Profile;
