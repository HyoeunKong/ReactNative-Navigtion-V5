import * as React from './node_modules/react';
import { useTranslation } from './node_modules/react-i18next';

import { TestAtom } from './node_modules/@Components/Atoms';
import { Container, TopText, Middle, Centered } from './styled';

import { IHomePage } from './Home.interface';

const Home: React.FunctionComponent<IHomePage.IProps> = () => {
    const { t } = useTranslation();

    return (
        <Container key={1}>
            <Middle>
                <Centered>
                    <TestAtom />
                </Centered>
            </Middle>
        </Container>
    );
};

export default Home;
