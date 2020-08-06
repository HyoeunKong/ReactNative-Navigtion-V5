import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Button, View, Text } from 'react-native';

import { TestAtom } from '@Components/Atoms';
import { Container, TopText, Middle, Centered } from './styled';

import { INotice } from './Notice.interface';

const Notice: React.FunctionComponent<INotice.IProps> = props => {
    const { navigation } = props;
    return (
        <Container key={1}>
            <Middle>
                <Centered>
                    <Text>Notice screen</Text>
                </Centered>
            </Middle>
        </Container>
    );
};

export default Notice;
