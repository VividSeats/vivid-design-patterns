import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../../src/components/atoms/Checkbox';

describe('<Checkbox />', () => {
    it('renders a checkbox', () => {
        const wrapper = shallow(<Checkbox id="TestCheckbox" />);
        expect(wrapper.find('.vp-control--checkbox').exists()).toBe(true);
    });

    it('should have a label if passed as a prop', () => {
        const checkboxLabel = 'Test Checkbox';
        const wrapper = shallow(<Checkbox id="TestCheckbox" label={checkboxLabel} />);

        expect(wrapper.find('.vp-control__span').text()).toEqual(checkboxLabel);
    });

    it('has a default value of unchecked', () => {
        const wrapper = shallow(<Checkbox id="TestCheckbox" />);

        expect(wrapper.find('input').props().checked).toEqual(false);
        wrapper.find('input').simulate('change');
        expect(wrapper.find('input').props().checked).toEqual(true);
    });

    it('should be checked if passed defaultChecked prop', () => {
        const wrapper = shallow(<Checkbox defaultChecked id="TestCheckbox" />);
        expect(wrapper.find('input').props().checked).toEqual(true);
    });

    it('works as a controlled component', () => {
        const wrapper = shallow(<Checkbox id="TestCheckbox" checked={false} />);

        expect(wrapper.find('input').props().checked).toEqual(false);
        wrapper.setProps({ checked: true });
        expect(wrapper.find('input').props().checked).toEqual(true);
    });

    it('should call onChange when clicked', () => {
        const mockOnChange = jest.fn();
        const wrapper = shallow(<Checkbox id="TestCheckbox" onChange={mockOnChange} />);

        wrapper.find('input').simulate('change');
        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    it('should display an error on validation failture', () => {
        const successMessage = 'success';
        const errorMessage = 'error';
        const validationMethod = value => (value ? successMessage : errorMessage);
        const wrapper = shallow(<Checkbox id="TestCheckbox" validationMethod={validationMethod} />);

        wrapper.find('input').simulate('change');
        expect(wrapper.find('.vp-helper-text--validation').text()).toEqual(successMessage);

        wrapper.find('input').simulate('change');
        expect(wrapper.find('.vp-helper-text--validation').text()).toEqual(errorMessage);
    });
});
