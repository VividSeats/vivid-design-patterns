import React from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import { useMedia } from 'react-use-media';
import Icon from '../atoms/Icon';

const Notification = ({ isOpen, children, className = '', onClickClose = () => {}, style = {}, ...props }) => {
    const isMobile = useMedia({ maxWidth: 768 });

    const transitions = useTransition(isOpen, null, {
        from: isMobile ? { bottom: '-100%' } : { right: '-100%' },
        enter: isMobile ? { bottom: '0%' } : { right: '0%' },
        leave: isMobile ? { bottom: '-100%' } : { right: '-100%' }
    });

    return transitions.map(
        ({ item, props: animatedProps, key }) =>
            item && (
                <animated.div key={key} style={{ ...style, ...animatedProps }} className={`vdp-notification ${className}`} {...props}>
                    {typeof onClickClose !== 'undefined' && (
                        <Icon type="close" className="vdp-notification__dismiss" onClick={onClickClose} />
                    )}
                    {children}
                </animated.div>
            )
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
