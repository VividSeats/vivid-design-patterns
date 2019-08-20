import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import onEnterPress from '../../utils/onEnterPress';

class SearchField extends React.Component {
    state = { inputValue: this.props.value };

    static propTypes = {
        id: PropTypes.string,
        name: PropTypes.string,
        value: PropTypes.string,
        type: PropTypes.string,
        autoComplete: PropTypes.string,
        placeholder: PropTypes.string,
        className: PropTypes.string,
        onClick: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        onChange: PropTypes.func,
        onMouseLeave: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onKeyPress: PropTypes.func,
        onSubmit: PropTypes.func
    };

    static defaultProps = {
        id: 'searchField',
        name: 'searchField',
        value: '',
        type: 'text',
        autoComplete: 'off',
        placeholder: '',
        className: '',
        onClick: () => {},
        onFocus: () => {},
        onBlur: () => {},
        onChange: () => {},
        onMouseLeave: () => {},
        onMouseEnter: () => {},
        onKeyPress: () => {},
        onSubmit: () => {}
    };

    resetInput = () => {
        this.setState({ inputValue: '' }, this.props.onChange(''));
    };

    onChange = event => {
        const { value } = event.target;
        this.setState({
            inputValue: value
        });
        this.props.onChange(event);
    };

    onKeyPress = event => {
        const { value } = event.target;
        const isEnterPressed = event.which === 13 || event.keyCode === 13 || event.key === 'Enter';
        if (isEnterPressed) {
            this.props.onSubmit(value);
        }
        this.props.onKeyPress(value);
    };

    render() {
        const {
            className,
            onClick,
            onFocus,
            onMouseEnter,
            onMouseLeave,
            onBlur,
            placeholder,
            name,
            autoComplete,
            id,
            type,
            onChange,
            onKeyPress,
            onSubmit,
            value,
            ...htmlAttributes
        } = this.props;
        const { inputValue } = this.state;
        const props = {
            onMouseEnter,
            onMouseLeave,
            onClick,
            onFocus,
            onBlur,
            placeholder,
            name,
            id,
            type,
            autoComplete,
            value: inputValue,
            onChange: this.onChange,
            onKeyPress: this.onKeyPress,
            ...htmlAttributes
        };
        return (
            <div className="vdp-search-field">
                <Icon className="vdp-search-field__icon-search" type="search" />
                <input className={`vdp-search-field__input ${className}`} {...props} />
                {!!inputValue && (
                    <Icon
                        className="vdp-search-field__icon-close"
                        type="close-circle"
                        onClick={this.resetInput}
                        onKeyPress={() => onEnterPress(this.resetInput)}
                    />
                )}
            </div>
        );
    }
}

export default SearchField;
