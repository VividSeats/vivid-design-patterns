import React from 'react';
import { mount } from 'enzyme';
import ExpandableContent from '../../src/components/molecules/ExpandableContent';

describe('<ExpandableContent />', () => {
    it('renders an expandable container', () => {
        const wrapper = mount(<ExpandableContent>Four score and seven years ago...</ExpandableContent>);
        const container = wrapper.find('.vdp-expandable-content');
        expect(container.exists()).toBe(true);
        expect(container.hasClass('__collapsed')).toBe(true);
    });

    it('expands container on button click', () => {
        const wrapper = mount(<ExpandableContent>Four score and seven years ago...</ExpandableContent>);
        const button = wrapper.find('.vdp-button');
        button.simulate('click');
        const container = wrapper.find('.vdp-expandable-content');
        expect(container.exists()).toBe(true);
        expect(container.hasClass('__collapsed')).toBe(false);
    });
});
