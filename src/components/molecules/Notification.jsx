import React from 'react';
import PropTypes from 'prop-types';
import Toast from '../atoms/Toast';

const Notification = ({ isOpen, children, className = '', animateOpacity, ...props }) => {
    return (
        <Toast {...{ isOpen, animateOpacity }}>
            <div className={`vdp-notification ${className}`} {...props}>
                {children}
            </div>
        </Toast>
    );
};

Notification.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    animateOpacity: PropTypes.bool
};

export default Notification;
