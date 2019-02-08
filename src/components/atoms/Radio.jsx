import React from 'react';
import PropTypes from 'prop-types';

const Radio = ({ id, checked, className, label, ...attributes }) => (
    <label className={`vp-control--radio ${className}`} aria-label="radio" htmlFor={id}>
        <input hidden type="radio" className="vp-control__input" id={id} checked={checked} {...attributes} />
        <span className="vp-control__span">{label}</span>
    </label>
);

Radio.propTypes = {
    checked: PropTypes.bool,
    isChecked: PropTypes.bool,
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    className: PropTypes.string,
    onChange: PropTypes.func
};

Radio.defaultProps = {
    onChange: () => {},
    className: ''
};

export default Radio;
