import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = ({ className = '', children, ...htmlAttributes }) => (
    <div className={`vdp-card__header ${className}`} {...htmlAttributes}>
        {children}
    </div>
);

CardHeader.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default CardHeader;
