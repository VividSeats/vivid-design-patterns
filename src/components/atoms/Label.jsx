import React from 'react';
import PropTypes from 'prop-types';

function Label({ label, id }) {
    if (!label) return null;

    return (
        <label className="vp-floating-label" htmlFor={id}>
            {label}
        </label>
    );
}

Label.propTypes = {
    label: PropTypes.string,
    id: PropTypes.string
};

export default Label;
