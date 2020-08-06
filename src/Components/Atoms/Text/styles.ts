import styled from 'styled-components';
import { Text } from 'react-native';
import { ITextProps } from './Text.interface';

export const TextStyled = styled(Text)<ITextProps>`
    font-size: ${({ size }) => size};

    line-height: ${({ lineHeight }) => lineHeight};
    color: ${({ color }) => color};
    text-decoration: ${({ textDecoration, color }) =>
        textDecoration ? `${textDecoration} ${color}` : null};
`;
