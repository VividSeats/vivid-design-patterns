import React from 'react';
import { shallow, mount } from 'enzyme';
import Chip from '../../src/components/atoms/Chip';

describe('<Chips />', () => {
    const chipLabel = 'Chip';
    const chipValue = 'chipValue';
    const chipId = 'chipId';
    const mockOnClose = jest.fn();
    const ChipComponent = <Chip value={chipValue} onClose={mockOnClose} label={chipLabel} id={chipId} />;
    it('renders a Chip component', () => {
        const wrapper = shallow(ChipComponent);
        expect(wrapper.hasClass('vp-chip')).toBe(true);
        expect(wrapper.text()).toBe(chipLabel);
    });

    it('renders with custom html attributes', () => {
        const wrapper = shallow(ChipComponent);
        expect(wrapper.prop('id')).toBe(chipId);
    });

    it('calls onClose with the value when you click on the chip', () => {
        const wrapper = mount(ChipComponent);
        wrapper.find('a').simulate('click');
        expect(mockOnClose).toHaveBeenCalledWith(chipValue);
    });

    it('calls onClose with the label when you clock on the chip without a value provided', () => {
        const wrapper = mount(<Chip label={chipLabel} onClose={mockOnClose} />);
        wrapper.find('a').simulate('click');
        expect(mockOnClose).toHaveBeenCalledWith(chipLabel);
    });

    it('calls onClose with the label when you press enter on the chip', () => {
        const wrapper = mount(ChipComponent);
        wrapper.simulate('click', { key: 'Enter' });
        expect(mockOnClose).toHaveBeenCalledWith(chipValue);
    });
});
