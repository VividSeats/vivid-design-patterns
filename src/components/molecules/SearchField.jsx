import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import onEnterPress from '../../utils/onEnterPress';
import { HeaderContext } from './Header';

const SearchField = props => {
    const [inputValue, setInputValue] = useState(props.value);

    SearchField.propTypes = {
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

    SearchField.defaultProps = {
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

    const resetInput = () => {
        setInputValue('');
        props.onChange('');
    };

    const onChange = event => {
        const { value } = event.target;
        setInputValue(value);
        props.onChange(event);
    };

    const onKeyPress = event => {
        const { value } = event.target;
        const isEnterPressed = event.which === 13 || event.keyCode === 13 || event.key === 'Enter';
        if (isEnterPressed) {
            props.onSubmit(value);
        }
        props.onKeyPress(value);
    };

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
        onSubmit,
        value,
        ...htmlAttributes
    } = props;
    const inputProps = {
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
        onChange,
        onKeyPress,
        ...htmlAttributes
    };
    return (
        <div className="vdp-search-field">
            <Icon className="vdp-search-field__icon-search" type="search" />
            <input className={`vdp-search-field__input ${className}`} {...inputProps} />
            {!!inputValue && (
                <Icon
                    className="vdp-search-field__icon-close"
                    type="close-circle"
                    onClick={resetInput}
                    onKeyPress={() => onEnterPress(resetInput)}
                />
            )}
        </div>
    );
};

export default SearchField;
