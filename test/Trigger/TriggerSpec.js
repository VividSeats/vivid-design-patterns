import React from 'react';
import { mount } from 'enzyme';
import Trigger from '../../src/components/atoms/Trigger';

describe('<Trigger />', () => {
    const mockOnClick = jest.fn();

    it('renders a trigger', () => {
        const wrapper = mount(<Trigger icon="refresh" onClick={mockOnClick} />);
        expect(wrapper.find('button.vdp-trigger').exists()).toBe(true);
        expect(wrapper.find('.vdp-icon-refresh').exists()).toBe(true);
    });

    it('renders a dark trigger', () => {
        const wrapper = mount(<Trigger icon="refresh" dark onClick={mockOnClick} />);
        expect(wrapper.find('button.vdp-trigger--dark').exists()).toBe(true);
    });

    it('renders a positioned trigger', () => {
        const wrapper = mount(<Trigger icon="refresh" position="tl" onClick={mockOnClick} />);
        expect(wrapper.find('button.vdp-trigger--tl').exists()).toBe(true);
    });

    it('handles onClick event', () => {
        const wrapper = mount(<Trigger icon="refresh" onClick={mockOnClick} />);
        wrapper.find('button.vdp-trigger').simulate('click');
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});
