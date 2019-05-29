import React from 'react';
import PropTypes from 'prop-types';

const Column = ({ className = '', children, ...htmlAttributes }) => (
    <div className={`vdp-col${!!className.length ? ` ${className}` : ''}`} {...htmlAttributes}>
        {children}
    </div>
);

Column.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

export default Column;
