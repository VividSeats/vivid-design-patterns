import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ checked, className = '', label, onChange = () => {}, ...attributes }) => (
    <label className={`vp-control--radio ${className}`} aria-label="radio">
        <input hidden type="radio" className="vp-control__input" onChange={onChange} checked={checked} {...attributes} />
        <span className="vp-control__span">{label}</span>
    </label>
);

Radio.propTypes = {
    checked: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func
};

export default Radio;
