import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ className = '', children }) => <div className={`vdp-row${!!className.length && ` ${className}`}`}>{children}</div>;

Row.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

export default Row;
