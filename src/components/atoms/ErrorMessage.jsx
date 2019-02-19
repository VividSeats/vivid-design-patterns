import React from 'react';
import PropTypes from 'prop-types';

function ErrorMessage({ error }) {
    if (!error) return null;

    return <span className="vdp-helper-text--validation">{error}</span>;
}

ErrorMessage.propTypes = {
    error: PropTypes.string
};

export default ErrorMessage;
