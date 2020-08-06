import React from 'react';

import { Platform } from 'react-native';
import { ITextProps } from './Text.interface';

import { TextStyled } from './styles';

export const Text: React.FC<ITextProps> = ({
    size,
    lineHeight,
    font,
    color,
    text,
    textDecoration,
}) => {
    // const sizeNumber = parseFloat(size.substring(0, size.length - 2));
    const lineHeightNumber = lineHeight || size + 4;
    const fontSize = size + 2;
    const fontLineHiegiht = lineHeightNumber + 2;

    return (
        <TextStyled
            size={fontSize}
            lineHeight={fontLineHiegiht}
            font={font}
            color={color}
            textDecoration={textDecoration}>
            {text}
        </TextStyled>
    );
};
