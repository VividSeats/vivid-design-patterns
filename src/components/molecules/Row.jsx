import React from 'react';
import PropTypes from 'prop-types';

const Row = ({ className = '', children, ...htmlAttributes }) => (
    <div className={`vdp-row${!!className.length ? ` ${className}` : ''}`} {...htmlAttributes}>
        {children}
    </div>
);

Row.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

export default Row;
