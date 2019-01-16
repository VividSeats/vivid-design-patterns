import React from 'react';
import PropTypes from 'prop-types';

const Backdrop = ({ className = '', children, dataState = '', onClick = () => {} }) => (
    <div
        {...{
            onClick,
            className: `vp-backdrop ${className}`,
            'data-state': dataState
        }}>
        {children}
    </div>
);

Backdrop.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    dataState: PropTypes.oneOf(['opening', 'closing', 'opened', 'closed']),
    onClick: PropTypes.func
};

export default Backdrop;
