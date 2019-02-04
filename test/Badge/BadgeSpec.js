import { mount } from 'enzyme/build';
import Badge from '../../src/components/atoms/Badge';
import React from 'react';

describe('<Headline />', () => {
    [1, 2, 3, 4, 5, 6].forEach(style => {
        it(`renders a badge with the style 'vp-badge-${style}'`, () => {
            const wrapper = mount(<Badge styles={style} />);
            expect(wrapper.find(`span.vp-badge--${style}`).exists()).toBe(true);
        });
    });
});
