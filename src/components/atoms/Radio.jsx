import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ id, isChecked, checked, className = '', label, ...attributes }) => (
    <label className={`vp-control--radio ${className}`} aria-label="radio" htmlFor={id}>
        <input hidden type="radio" className="vp-control__input" id={id} checked={checked || isChecked} {...attributes} />
        <span className="vp-control__span">{label}</span>
    </label>
);

Radio.propTypes = {
    checked: PropTypes.bool,
    isChecked: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    className: PropTypes.string
};

export default Radio;
