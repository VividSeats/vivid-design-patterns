import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';

const Notification = ({ isOpen, children, className = '', type = 'toast', onClickClose = () => {}, ...props }) => {
    return (
        <div
            className={`vdp-notification vdp-notification--${type} ${isOpen ? 'vdp-notification--toast--open' : ''} ${className}`}
            {...props}>
            {type === 'toast' && (
                <Button importance="text" muted className="dismiss" onClick={onClickClose}>
                    <Icon type="close" />
                </Button>
            )}
            {children}
        </div>
    );
};

Notification.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.oneOf(['toast']).isRequired,
    onClickClose: PropTypes.func
};

export default Notification;
