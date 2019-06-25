import React from 'react';
import { mount } from 'enzyme';
import Form from '../../src/components/molecules/Form';
import TextField from '../../src/components/molecules/TextField';
import Button from '../../src/components/atoms/Button';

describe('<Form />', () => {
    const mockValidationMethod = jest.fn();
    const mockOnValidationFailure = jest.fn();
    const mockOnSubmit = jest.fn();
    const form = (
        <Form onSubmit={mockOnSubmit} onValidationFailure={mockOnValidationFailure}>
            <Form.ContextConsumer>
                {({ setForm }) => (
                    <React.Fragment>
                        <TextField
                            name="age"
                            id="input"
                            ref={setForm}
                            validationMethod={mockValidationMethod}
                            label={'Input Length > 10'}
                        />
                        <Button type="submit">Submit</Button>
                    </React.Fragment>
                )}
            </Form.ContextConsumer>
        </Form>
    );

    it('renders its child elements', () => {
        const wrapper = mount(form);
        expect(wrapper.find('input').exists()).toBe(true);
        expect(wrapper.find('button').exists()).toBe(true);
    });

    it('validates its fields on submission', () => {
        const wrapper = mount(form);
        wrapper.find('form').simulate('submit');
        expect(mockValidationMethod).toHaveBeenCalled();
    });

    it('calls onSubmit if it has no errors and wont call onValidationFailure', () => {
        mockValidationMethod.mockReturnValueOnce('');
        const wrapper = mount(form);
        wrapper.find('form').simulate('submit');
        expect(mockOnSubmit).toHaveBeenCalled();
        expect(mockOnValidationFailure).not.toHaveBeenCalled();
    });

    it('calls onSubmit with the correct output param', () => {
        const wrapper = mount(form);
        wrapper.find(TextField).setState({ value: 13 });
        wrapper.find('form').simulate('submit');
        expect(mockOnSubmit.mock.calls[0][0].age).toBe(13);
    });

    it('calling the onSubmit onError arugment sets correct error states of children', () => {
        const errorMessage = 'invalid age';
        const wrapper = mount(form);
        wrapper.find('form').simulate('submit');
        const onError = mockOnSubmit.mock.calls[0][1];
        onError({ age: errorMessage });
        expect(wrapper.find(TextField).state().error).toBe(errorMessage);
    });

    it('renders errors from state of textFields', () => {
        const error = 'email already found';
        const wrapper = mount(form);
        wrapper.find(TextField).setState({ error });
        expect(wrapper.find('.vdp-helper-text--validation').text()).toBe(error);
    });

    it('calls onValidationFailure when it has errors and wont call onSubmit.', () => {
        mockValidationMethod.mockReturnValueOnce('Error');
        const wrapper = mount(form);
        wrapper.find('form').simulate('submit');
        expect(mockOnSubmit).not.toHaveBeenCalled();
        expect(mockOnValidationFailure).toHaveBeenCalledWith(expect.arrayContaining([expect.any(TextField)]));
    });
});
