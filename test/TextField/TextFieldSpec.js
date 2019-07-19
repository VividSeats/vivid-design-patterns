import React from 'react';
import { mount } from 'enzyme';
import TextField from '../../src/components/molecules/TextField';

describe('<TexField />', () => {
    const labelText = 'label';
    const id = 'textFieldId';
    const mockValidationMethod = jest.fn();
    const changeValue = 'a';
    const changeEvent = { target: { value: changeValue } };
    const textFieldComponent = <TextField id={id} label={labelText} validationMethod={mockValidationMethod} />;
    const controlledTextFieldComponent = <TextField id={id} value="" label={labelText} validationMethod={mockValidationMethod} />;

    it('renders an <input> and <label>', () => {
        const wrapper = mount(textFieldComponent);
        expect(wrapper.find('input').exists()).toBe(true);
        expect(wrapper.find('label').text()).toBe(labelText);
    });

    it('has an id that match the htmlFor on the label', () => {
        const wrapper = mount(textFieldComponent);
        expect(wrapper.find('label').prop('htmlFor')).toBe(id);
    });

    it('have a "floating" label when focused', () => {
        const wrapper = mount(textFieldComponent);
        expect(wrapper.find('.vdp-textfield').prop('data-state')).toBeFalsy();
        wrapper.find('input').simulate('focus');
        expect(wrapper.find('.vdp-textfield').prop('data-state')).toBe('filled');
    });

    it('changes dirty state when value prop changes', () => {
        const wrapper = mount(controlledTextFieldComponent);
        wrapper.setProps({ value: 'string' });
        expect(wrapper.find('.vdp-textfield').prop('data-state')).toBe('filled');
    });

    it('have a "floating" label when it has a value', () => {
        const wrapper = mount(textFieldComponent);
        wrapper.find('input').simulate('focus');
        wrapper.find('input').instance().value = changeValue;
        wrapper.find('input').simulate('change', changeEvent);
        wrapper.find('input').simulate('blur');
        expect(wrapper.find('.vdp-textfield').prop('data-state')).toMatch('filled');
    });

    describe('should handle error and success states correctly', () => {
        it('should not validate on first type', () => {
            const wrapper = mount(textFieldComponent);
            wrapper.find('input').simulate('change', changeEvent);
            expect(wrapper.find('.vdp-textfield').prop('data-validate')).toBeFalsy();
        });

        it('should validate the input after user blurs', () => {
            const wrapper = mount(textFieldComponent);
            wrapper.find('input').simulate('change', changeEvent);
            wrapper.find('input').simulate('blur');
            expect(wrapper.find('.vdp-textfield').prop('data-validate')).toBe(true);
            expect(mockValidationMethod).toBeCalled();
            wrapper.find('input').simulate('change', changeEvent);
            expect(wrapper.find('.vdp-textfield').prop('data-validate')).toBe(true);
            expect(mockValidationMethod).toBeCalled();
        });

        it('should render errors', () => {
            const error = 'error';
            const textFieldComponentWithError = (
                <TextField id={id} error={error} label={labelText} validationMethod={mockValidationMethod} />
            );
            const wrapper = mount(textFieldComponentWithError);
            expect(wrapper.find('.vdp-helper-text--validation').text()).toBe(error);
        });
    });

    describe('handle password inputs', () => {
        const passwordInputComponent = <TextField id="password" label="Password" type="password" />;
        it('it should render with input type = "password"', () => {
            const wrapper = mount(passwordInputComponent);
            expect(wrapper.find('input').prop('type')).toBe('password');
        });

        it('should show the password when you click the show icon, and hide the password when you click the hide icon', () => {
            const wrapper = mount(passwordInputComponent);
            wrapper.find('i').simulate('click');
            expect(wrapper.find('input').prop('type')).toBe('text');
            expect(wrapper.find('i').hasClass('vdp-icon-eye')).toBe(true);
            expect(wrapper.find('.vdp-textfield__trailing-icon span').text()).toBe('Hide');

            wrapper.find('i').simulate('click');
            expect(wrapper.find('input').prop('type')).toBe('password');
            expect(wrapper.find('i').hasClass('vdp-icon-eye-filled')).toBe(true);
            expect(wrapper.find('.vdp-textfield__trailing-icon span').text()).toBe('Show');
        });
    });
});
