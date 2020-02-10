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
    inputs = [];

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

    setForm = ref => {
        this.inputs.push(ref);
    };

    getInputValue = input => {
        const { state, props } = input;
        let inputVal = state.value || props.value;

        if (state.checked !== undefined) {
            inputVal = state.checked;
        } else if (props.checked !== undefined) {
            inputVal = props.checked;
        }
        return inputVal;
    };

    afterValidation = componentsWithErrors => {
        const isFormValid = this.inputs.every(input => !input.state.error);
        const { onSubmit, onValidationFailure } = this.props;
        if (isFormValid) {
            const formOutput = {};
            this.inputs.forEach(input => {
                formOutput[input.props.name] = this.getInputValue(input);
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
        const { props } = component;
        return props.validationMethod(this.getInputValue(component));
    };

    onSubmit = e => {
        e.preventDefault();
        this.validate();
    };

    static ContextConsumer = FormContextConsumer;

    render() {
        const { props, setForm } = this;

        // pull out htmlAttributes from props and pass them to the dom element
        const { onSubmit, onValidationFailure, ...htmlAttributes } = props;
        return (
            <form {...{ onSubmit: this.onSubmit, ...htmlAttributes }}>
                <FormContext.Provider value={{ setForm }}>{props.children}</FormContext.Provider>
            </form>
        );
    }
}

export default Form;
