import React from 'react';
import PropTypes from 'prop-types';
import Input from '../atoms/Input';
import onEnterPress from '../../utils/onEnterPress';

class PasswordInput extends React.Component {
    state = {
        showPassword: false
    };

    togglePasswordVisibility = () => {
        this.setState(({ showPassword }) => ({ showPassword: !showPassword }));
    };

    render() {
        const { showPassword } = this.state;
        const { type: removeType, ...htmlAttributes } = this.props;
        const passwordToggleText = showPassword ? 'Hide' : 'Show';
        const passwordToggleIcon = showPassword ? 'visibility_off' : 'visibility';
        const inputType = showPassword ? 'text' : 'password';
        return (
            <React.Fragment>
                <Input {...{ type: inputType, ...htmlAttributes }} />
                <span
                    className="vdp-textfield__trailing-icon"
                    onKeyPress={onEnterPress.bind(this, this.togglePasswordVisibility)}
                    onClick={this.togglePasswordVisibility}>
                    <i className="material-icons">{passwordToggleIcon}</i>
                    <span className="show-password-text">{passwordToggleText}</span>
                </span>
            </React.Fragment>
        );
    }
}

PasswordInput.propTypes = {
    type: PropTypes.string
};

export default PasswordInput;
