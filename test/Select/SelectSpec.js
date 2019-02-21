import React from 'react';
import { mount } from 'enzyme';
import Select from '../../src/components/molecules/Select';
import Form from '../../src/components/molecules/Form';
import Button from '../../src/components/atoms/Button';

describe('<Select />', () => {
    const mockOnChange = jest.fn();
    const mockValidationMethod = jest.fn();
    const selectComponent = (
        <Select onChange={mockOnChange} validationMethod={mockValidationMethod}>
            <Select.Option value="1">1</Select.Option>
            <Select.Option value="2">2</Select.Option>
            <Select.Option value="3">3</Select.Option>
        </Select>
    );

    it('renders a select component with options', () => {
        const wrapper = mount(selectComponent);
        expect(wrapper.find('select').hasClass('vdp-select__control')).toBe(true);
        expect(wrapper.find('option').length).toBeGreaterThanOrEqual(3);
    });

    it('renders an disabled placeholder option when no label is present', () => {
        const wrapper = mount(selectComponent);
        expect(
            wrapper
                .find('option')
                .first()
                .prop('disabled')
        ).toBeFalsy();
    });

    it('does not render a disabled placeholder option when a label is present', () => {
        const selectComponentWithLabel = (
            <Select onChange={mockOnChange} validationMethod={mockValidationMethod} label={'Label'}>
                <Select.Option value="1">1</Select.Option>
                <Select.Option value="2">2</Select.Option>
                <Select.Option value="3">3</Select.Option>
            </Select>
        );

        const wrapper = mount(selectComponentWithLabel);
        expect(wrapper.find('label').length).toBe(1);
        expect(
            wrapper
                .find('option')
                .first()
                .prop('disabled')
        ).toBeTruthy();
    });

    it('calls onchange when you select an option', () => {
        const wrapper = mount(selectComponent);
        wrapper.find('select').simulate('change');
        expect(mockOnChange).toHaveBeenCalledTimes(1);
    });

    describe('should handle validation', () => {
        const mockOnSubmit = jest.fn();
        const selectComponentInForm = (
            <Form onSubmit={mockOnSubmit}>
                <Form.ContextConsumer>
                    {({ setForm }) => (
                        <React.Fragment>
                            <Select ref={setForm} validationMethod={mockValidationMethod}>
                                <Select.Option value={1}>1</Select.Option>
                                <Select.Option value={2}>2</Select.Option>
                            </Select>
                            <Button type="submit">Submit</Button>
                        </React.Fragment>
                    )}
                </Form.ContextConsumer>
            </Form>
        );

        it('should call the validation method onChange', () => {
            const wrapper = mount(selectComponent);
            wrapper.find('select').simulate('change');
            expect(mockOnChange).toHaveBeenCalledTimes(1);
            expect(mockValidationMethod).toHaveBeenCalledTimes(1);
        });

        it('should call its validationMethod when the form submits', () => {
            const wrapper = mount(selectComponentInForm);
            wrapper.find('form').simulate('submit');
            expect(mockValidationMethod).toHaveBeenCalled();
        });
    });
});
