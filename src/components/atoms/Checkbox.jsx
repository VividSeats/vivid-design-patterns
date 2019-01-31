import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
    state = {
        checked: this.props.defaultChecked
    };

    onChange = () => {
        this.setState(
            ({ checked }) => ({ checked: !checked }),
            () => {
                this.props.onChange(this.state.checked);
            }
        );
    };

    render() {
        const { className, onClick, validationMethod, defaultChecked, label, id, ...htmlAttributes } = this.props;
        return (
            <label className={`${className} vp-checkbox`} aria-label="checkbox" htmlFor={id}>
                <input
                    type="checkbox"
                    className="vp-checkbox__input"
                    onChange={this.onChange}
                    checked={this.state.checked}
                    id={id}
                    {...htmlAttributes}
                />
                <span className="vp-checkbox__span">{label}</span>
            </label>
        );
    }
}

Checkbox.propTypes = {
    onChange: PropTypes.func,
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
    className: () => {}
};

export default Checkbox;
