import React, { useState, useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import onEnterPress from '../../utils/onEnterPress';
import { HeaderContext } from './Header';

const SearchField = ({
    id = 'searchField',
    name = 'searchField',
    type = 'text',
    autoComplete = 'off',
    placeholder = '',
    className = '',
    onChange = () => {},
    onKeyPress = () => {},
    onSubmit = () => {},
    onReset = () => {},
    value,
    ...props
}) => {
    const inputRef = useContext(HeaderContext);

    const resetInput = () => {
        onReset();
    };

    const internalOnKeyPress = event => {
        const { value: eventValue } = event.target;
        const isEnterPressed = event.which === 13 || event.keyCode === 13 || event.key === 'Enter';
        if (isEnterPressed) {
            onSubmit(eventValue);
        }
        onKeyPress(eventValue);
    };
    return (
        <div className="vdp-search-field">
            <Icon className="vdp-search-field__icon-search" type="search" />
            <input
                className={`vdp-search-field__input ${className}`}
                {...{
                    ...props,
                    value,
                    onChange,
                    onKeyPress: internalOnKeyPress,
                    id,
                    name,
                    type,
                    autoComplete,
                    placeholder,
                    ref: inputRef
                }}
            />
            {!!value && (
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
    onSubmit: PropTypes.func,
    onReset: PropTypes.func
};

export default SearchField;
