import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';

const Notification = ({ isOpen, children, className = '', onClickClose, ...props }) => {
    return (
        <div className={`vdp-notification ${isOpen ? 'vdp-notification--toast--open' : ''} ${className}`} {...props}>
            {typeof onClickClose !== 'undefined' && <Icon type="close" className="vdp-notification__dismiss" onClick={onClickClose} />}
            {children}
        </div>
    );
};

Notification.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    /** Called when user clicks on the 'X' button in the Notification. If a click handler is not passed, the 'X' will not be displayed */
    onClickClose: PropTypes.func
};

export default Notification;
