import { mount } from 'enzyme';
import Badge from '../../src/components/atoms/Badge';
import React from 'react';

describe('<Badge />', () => {
    ['angled', 'count'].forEach(badgeType => {
        it(`renders a badge with the style 'vdp-badge --${badgeType}'`, () => {
            const wrapper = mount(<Badge type={badgeType} />);
            expect(wrapper.find('span.vdp-badge').hasClass(`--${badgeType}`)).toBe(true);
        });
    });

    ['success', 'warning', 'error'].forEach(style => {
        it(`renders a badge with the style 'vdp-badge --${style}'`, () => {
            const wrapper = mount(<Badge styleAs={style} />);
            expect(wrapper.find('span.vdp-badge').hasClass(`--${style}`)).toBe(true);
        });
    });

    it('renders a default badge with the `--lg` class applied ', () => {
        const wrapper = mount(<Badge large={true} />);
        expect(wrapper.find('span.vdp-badge').hasClass('--lg')).toBe(true);
    });
});
