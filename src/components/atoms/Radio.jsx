import React from 'react';

const Radio = ({ id, isChecked, checked, className = '', label, children, ...attributes }) => (
    <label className={`vp-control--radio ${className}`} aria-label="radio" htmlFor={id}>
        <input hidden type="radio" className="vp-control__input" id={id} checked={checked || isChecked} {...attributes} />
        <span className="vp-control__span">{label}</span>
    </label>
);

export default Radio;
