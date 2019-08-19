import React from 'react';	
import PropTypes from 'prop-types';	
import Icon from '../atoms/Icon';	

 const Notification = ({ isOpen, children, className = '', type, onClickClose = () => {}, ...props }) => {	
    return (	
        <div	
            className={`vdp-notification vdp-notification--${type} ${isOpen ? 'vdp-notification--toast--open' : ''} ${className}`}	
            {...props}>	
            {type === 'toast' && <Icon type="close" className="vdp-notification__dismiss" onClick={onClickClose} />}	
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
