import React from 'react';
import PropTypes from 'prop-types';
import Backdrop from '../atoms/Backdrop';
import Icon from '../atoms/Icon';

const Notification = ({ isOpen, children, className = '', type, onClickClose = () => {}, hasBackdrop = false, ...props }) => {
    return (
        <div
            className={`vdp-notification vdp-notification--${type} ${isOpen ? 'vdp-notification--toast--open' : ''} ${className}`}
            {...props}>
            {type === 'toast' && <Icon type="close" className="vdp-notification__dismiss" onClick={onClickClose} />}
            {hasBackdrop && <Backdrop isOpen={isOpen} />}
            {children}
        </div>
    );
};

Notification.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.oneOf(['toast']).isRequired,
    onClickClose: PropTypes.func,
    hasBackdrop: PropTypes.bool
};

export default Notification;
