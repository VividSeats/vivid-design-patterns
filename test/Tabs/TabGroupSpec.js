import React from 'react';
import { shallow } from 'enzyme';
import TabGroup from '../../src/components/molecules/TabGroup';

describe('<TabGroup />', () => {
    it('renders a tab group', () => {
        const wrapper = shallow(<TabGroup />);
        expect(wrapper.find('.vdp-tab-group').exists()).toBe(true);
    });

    it('renders a dark themed tab group', () => {
        const wrapper = shallow(<TabGroup dark />);
        expect(wrapper.find('.vdp-tab-group').hasClass('--inverted')).toBe(true);
    });
});
