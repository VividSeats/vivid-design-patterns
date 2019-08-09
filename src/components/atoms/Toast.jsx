import React from 'react';
import PropTypes from 'prop-types';

const Toast = ({ isOpen, children, animateOpacity = false }) => {
    return <div className={`vdp-toast${animateOpacity ? '--opacity' : ''} ${isOpen ? 'open' : ''}`}>{children}</div>;
};

Toast.propTypes = {
    children: PropTypes.node,
    isOpen: PropTypes.bool.isRequired,
    animateOpacity: PropTypes.bool
};

export default Toast;
