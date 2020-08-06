import React from "react";

import { shalloWithTheme } from "@Test/Helpers/render";
// import renderer from 'react-test-renderer';

import { Text } from "./Text.impl";

describe("Components", () => {
    describe("Text", () => {
        it("should match snapshot", () => {
            const wrapper = shalloWithTheme(
                <Text
                    size={15}
                    lineHeight={18}
                    text="블록체인기반 최초 기부 혁신을 희망하다"
                />
            );

            expect(wrapper).toMatchSnapshot();
        });
    });
});
