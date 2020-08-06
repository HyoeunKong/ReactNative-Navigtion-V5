import { WithTranslation } from 'react-i18next';

export namespace IWelcome {
    export interface IProps {
        navigation: any;
    }

    export interface InitialProps {
        namespacesRequired: string[];
    }

    export interface IStateProps {
        home: {
            version: number;
        };
        image: {
            url: string;
        };
    }
}
