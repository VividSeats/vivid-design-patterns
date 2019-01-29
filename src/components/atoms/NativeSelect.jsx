import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import SelectOption from './SelectOption';

const nullString = 'null';

function getEmptyOption(value, label) {
    if (!label) return null;

    return (
        <SelectOption disabled="disabled" value={nullString}>
            {label}
        </SelectOption>
    );
}

function NativeSelect({ onChange, onBlur, id, value, label, disabled, small, medium, children }) {
    const emptyOption = getEmptyOption(value, label);
    const selectAttributes = {
        id,
        onChange,
        onBlur,
        disabled,
        value: value || nullString,
        className: classnames('vp-select__control', {
            '--small': small,
            '--medium': medium
        })
    };

    return (
        <select {...selectAttributes} aria-label="select">
            {emptyOption}
            {children}
        </select>
    );
}

NativeSelect.propTypes = {
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    id: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    disabled: PropTypes.bool,
    small: PropTypes.bool,
    medium: PropTypes.bool
};

export default NativeSelect;
