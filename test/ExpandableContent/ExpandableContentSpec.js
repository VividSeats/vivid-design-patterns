import React from 'react';
import { mount } from 'enzyme';
import ExpandableContent from '../../src/components/molecules/ExpandableContent';

describe('<ExpandableContent />', () => {
    it('renders an expandable container', () => {
        const wrapper = mount(
            <ExpandableContent maxHeight="30rem" buttonText="Show More Stuff">
                Four score and seven years ago...
            </ExpandableContent>
        );
        wrapper.setState({ isCollapsed: true });

        const container = wrapper.find('.vdp-expandable-content');
        expect(container.exists()).toBe(true);
        expect(container.hasClass('__collapsed')).toBe(true);
        expect(container.prop('style')).toEqual({ maxHeight: '30rem' });

        const button = wrapper.find('.vdp-button');
        expect(button.exists()).toBe(true);
        expect(button.text()).toEqual('Show More Stuff');
    });

    it('expands container on button click', () => {
        const wrapper = mount(<ExpandableContent>Four score and seven years ago...</ExpandableContent>);
        wrapper.setState({ isCollapsed: true });

        let container = wrapper.find('.vdp-expandable-content');
        expect(container.exists()).toBe(true);
        expect(container.hasClass('__collapsed')).toBe(true);

        const button = wrapper.find('.vdp-button');
        button.simulate('click');

        container = wrapper.find('.vdp-expandable-content');
        expect(container.exists()).toBe(true);
        expect(container.hasClass('__collapsed')).toBe(false);
        expect(container.prop('style')).toEqual({ maxHeight: '999rem' });
    });
});
