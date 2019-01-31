import React from 'react';
import PropTypes from 'prop-types';

const FabChild = ({ children, className = '', ...htmlAttributes }) => (
    <div className={`vp-fab__child ${className}`} {...htmlAttributes}>
        {children}
    </div>
);

FabChild.displayName = 'FabChild';

FabChild.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default FabChild;
