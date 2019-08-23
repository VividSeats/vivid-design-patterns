import React from 'react';
import PropTypes from 'prop-types';

const DrawerHeader = ({ children, className = '', ...htmlProps }) => {
    return (
        <div className={`vdp-drawer__header ${className}`} {...htmlProps}>
            {children}
        </div>
    );
};

DrawerHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default DrawerHeader;
