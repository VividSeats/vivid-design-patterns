import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
    state = { checked: this.props.defaultChecked || this.props.checked || false, error: '' };

    getCheckedState() {
        return this.isControlled() ? this.props.checked : this.state.checked;
    }

    onChange = () => {
        if (this.isControlled()) {
            const error = this.props.validationMethod(!this.getCheckedState());
            this.setState(({ checked }) => ({ checked: !checked, error }));
            this.props.onChange(!this.getCheckedState());
        } else {
            this.setState(
                ({ checked }) => ({ checked: !checked }),
                () => {
                    const { state } = this;
                    const error = this.props.validationMethod(state.checked);
                    this.setState({
                        error
                    });
                    this.props.onChange(state.checked);
                }
            );
        }
    };

    isControlled() {
        return typeof this.props.checked !== 'undefined';
    }

    render() {
        const { error } = this.state;
        const { className, onChange, validationMethod, defaultChecked, label, id, ...htmlAttributes } = this.props;
        return (
            <label className={`vp-control--checkbox ${className} `} aria-label="checkbox" htmlFor={id} data-state={error ? 'error' : null}>
                <input
                    hidden
                    type="checkbox"
                    className="vp-control__input"
                    onChange={this.onChange}
                    checked={this.getCheckedState()}
                    id={id}
                    {...htmlAttributes}
                />
                <span className="vp-control__span">
                    {label}
                    {!!error && <span className="vp-helper-text--validation">{error}</span>}
                </span>
            </label>
        );
    }
}

Checkbox.propTypes = {
    onChange: PropTypes.func,
    checked: PropTypes.bool,
    defaultChecked: PropTypes.bool,
    id: PropTypes.string.isRequired,
    validationMethod: PropTypes.func,
    label: PropTypes.string,
    className: PropTypes.string
};

Checkbox.defaultProps = {
    defaultChecked: false,
    onChange: () => {},
    validationMethod: () => {},
    className: ''
};

export default Checkbox;
