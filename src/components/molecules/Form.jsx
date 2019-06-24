// Inspired by the formsy library
import React from 'react';
import PropTypes from 'prop-types';

const FormContext = React.createContext({});

function FormContextConsumer(props) {
    return (
        <FormContext.Consumer {...props}>
            {context => {
                if (!context) {
                    throw new Error('Form.Context Consumer must be rendered as a child of the Form sub tree');
                }

                return props.children(context);
            }}
        </FormContext.Consumer>
    );
}

FormContextConsumer.propTypes = {
    children: PropTypes.func
};

class Form extends React.Component {
    static propTypes = {
        /** Callback is passed plain JavaScript object with key/value pairs of `name` props and input value at time of submission. */
        onSubmit: PropTypes.func,
        /** Custom callback when validation fails on the form. Takes in an array of inputs with errors as the parameter */
        onValidationFailure: PropTypes.func,
        children: PropTypes.node
    };

    static defaultProps = {
        onSubmit: () => {},
        onValidationFailure: () => {}
    };

    static ContextConsumer = FormContextConsumer;
    inputs = [];

    setForm = ref => {
        this.inputs.push(ref);
    };

    afterValidation = componentsWithErrors => {
        const isFormValid = this.inputs.every(input => !input.state.error);
        const { onSubmit, onValidationFailure } = this.props;
        if (isFormValid) {
            const formOutput = {};
            this.inputs.forEach(input => {
                let inputVal;
                const { state, props } = input;
                if (state.checked !== undefined) {
                    inputVal = state.checked;
                } else if (props.checked !== undefined) {
                    inputVal = props.checked;
                } else {
                    inputVal = state.value || props.value;
                }
                formOutput[input.props.name] = inputVal;
            });
            onSubmit(formOutput);
        } else {
            onValidationFailure(componentsWithErrors);
        }
    };

    validate = () => {
        const componentsWithErrors = [];
        this.inputs.forEach((component, index) => {
            const error = this.validateInput(component);
            if (!!error) {
                componentsWithErrors.push(component);
            }
            component.setState(
                {
                    error
                },
                index === this.inputs.length - 1 ? () => this.afterValidation(componentsWithErrors) : null
            );
        });
    };

    validateInput = component => {
        let componentValue;

        const { state, props } = component;
        if (state.checked) {
            componentValue = state.checked;
        } else if (props.checked) {
            componentValue = props.checked;
        } else {
            componentValue = state.value || props.value;
        }
        return props.validationMethod(componentValue);
    };

    onSubmit = e => {
        e.preventDefault();
        this.validate();
    };

    render() {
        const { props, setForm } = this;

        // pull out htmlAttributes from props and pass them to the dom element
        const { onSubmit, onValidationFailure, scrollToTopError, ...htmlAttributes } = props;
        return (
            <form {...{ onSubmit: this.onSubmit, ...htmlAttributes }}>
                <FormContext.Provider value={{ setForm }}>{props.children}</FormContext.Provider>
            </form>
        );
    }
}

export default Form;
