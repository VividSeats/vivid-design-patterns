import React from 'react';
import PropTypes from 'prop-types';

const FabChild = ({ children, className = '', isDivider, ...htmlAttributes }) => (
    <div className={`vdp-fab__child${isDivider ? '--divider' : ''} ${className}`} {...htmlAttributes}>
        {children}
    </div>
);

FabChild.displayName = 'FabChild';

FabChild.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    isDivider: PropTypes.bool
};

export default FabChild;
