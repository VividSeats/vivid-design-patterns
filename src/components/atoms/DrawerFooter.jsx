import React from 'react';
import PropTypes from 'prop-types';

const DrawerFooter = ({ children, className = '', ...htmlProps }) => {
    return (
        <div className={`vdp-drawer__footer ${className}`} {...htmlProps}>
            {children}
        </div>
    );
};

DrawerFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string
};

export default DrawerFooter;
