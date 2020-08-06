import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { Text } from 'react-native';
import { ThemeProvider } from 'styled-components/native';
import codePush from 'react-native-code-push';
import BootSplash from 'react-native-bootsplash';
import { ApolloProvider } from '@apollo/react-hooks';
import { theme } from '@Definitions/Styled';
import { IS_STORYBOOK } from 'react-native-dotenv';
import RootRouter from '@Router';

import { SafeArea } from '@Styled';

// Storybook server
import { getApolloClient, TCacheShape } from '@Graphql';
import StoryBookUIRoot from '../storybook';

// Configure Apollo Client

class App extends Component<{}, { client: any }> {
    constructor(props: any) {
        super(props);
        this.state = {
            client: undefined,
        };
    }

    public componentDidMount(): void {
        BootSplash.hide();
        getApolloClient().then((c: TCacheShape) =>
            this.setState({ client: c })
        );
    }

    public render(): JSX.Element {
        const { client } = this.state;

        return (
            // <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <SafeArea>
                    <RootRouter />
                </SafeArea>
            </ThemeProvider>
            // </ApolloProvider>
        );
    }
}

const codePushOptions = { checkFrequency: codePush.CheckFrequency.MANUAL };

const exportedApp = IS_STORYBOOK ? App : codePush(codePushOptions)(App);

export default exportedApp;
