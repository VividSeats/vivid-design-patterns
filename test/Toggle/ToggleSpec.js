import React from 'react';
import { shallow, mount } from 'enzyme';
import Toggle from '../../src/components/atoms/Toggle';

describe('<Toggle />', () => {
    const toggleTitle = 'Toggle';
    const ToggleComponent = <Toggle title={toggleTitle} />;

    it('Renders an label and checkbox input', () => {
        const wrapper = shallow(ToggleComponent);
        expect(wrapper.find('input').exists()).toBe(true);
        expect(wrapper.find('label').exists()).toBe(true);
    });

    it('renders a label when provided', () => {
        const wrapper = mount(ToggleComponent);
        expect(wrapper.find('.vdp-toggle__label').text()).toBe(toggleTitle);
    });

    describe('When <Toggle/> is used as an uncontrolled component', () => {
        it('it "toggles" on when clicked', () => {
            const wrapper = mount(ToggleComponent);
            wrapper.find('input').simulate('change', { target: { checked: true } });
            expect(wrapper.state('on')).toBe(true);
            expect(wrapper.find('input').prop('checked')).toBeTruthy();
        });

        it('it renders with a default value', () => {
            const wrapper = mount(<Toggle defaultOn={true} />);
            expect(wrapper.state('on')).toBe(true);
            expect(wrapper.find('input').prop('checked')).toBeTruthy();
            wrapper.find('input').simulate('change', { target: { checked: false } });
            expect(wrapper.state('on')).toBe(false);
            expect(wrapper.find('input').prop('checked')).toBeFalsy();
        });
    });

    describe('When <Toggle/> is used as an controlled component', () => {
        const mockOnToggle = jest.fn();
        const controlledToggleComponent = <Toggle on onToggle={mockOnToggle} />;
        it('it triggers an onChange with correct values when called when toggled', () => {
            const wrapper = mount(controlledToggleComponent);
            wrapper.find('input').simulate('change', { target: { checked: false } });
            expect(mockOnToggle).toHaveBeenCalledWith(false);
            wrapper.find('input').simulate('change', { target: { checked: true } });
            expect(mockOnToggle).toHaveBeenCalledWith(true);
        });

        it('it "toggles" on when new on prop is passed in', () => {
            const wrapper = mount(<Toggle on />);
            expect(wrapper.find('input').prop('checked')).toBeTruthy();
            wrapper.setProps({ on: false });
            expect(wrapper.find('input').prop('checked')).toBeFalsy();
        });
    });
});
