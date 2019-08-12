import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import Button from '../atoms/Button';

const Notification = ({ isOpen, children, className = '', type, onClickClose = () => {}, ...props }) => {
    return (
        <div className={`vdp-notification vdp-${type} ${isOpen ? 'open' : ''} ${className}`} {...props}>
            {type === 'toast' && (
                <Button importance="text" muted className="close-btn" onClick={onClickClose}>
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
