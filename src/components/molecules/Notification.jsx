import 'core-js';
import 'core-js/es6/string';
import 'core-js/es6/object';
import 'core-js/es7/object';
import 'core-js/es6/array';
import 'core-js/es7/array';
import 'core-js/es6/set';
import 'core-js/es7/set';
import 'core-js/modules/es6.regexp.constructor';
import React from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring/web.cjs';
import useMedia from 'use-media';
import Backdrop from '../atoms/Backdrop';
import Icon from '../atoms/Icon';

const Notification = ({ isOpen, children, className = '', onClickClose, hasBackdrop, onClickBackdrop, style = {}, ...props }) => {
    const isMobile = useMedia({ maxWidth: 768 });

    const transitions = useTransition(isOpen, null, {
        from: isMobile ? { bottom: '-100%' } : { right: '-100%' },
        enter: isMobile ? { bottom: '0%' } : { right: '0%' },
        leave: isMobile ? { bottom: '-100%' } : { right: '-100%' }
    });

    return (
        <>
            {transitions.map(
                ({ item, props: animatedProps, key }) =>
                    item && (
                        <animated.div
                            key={key}
                            style={{ ...style, ...animatedProps }}
                            className={`vdp-notification ${className}`}
                            {...props}>
                            {typeof onClickClose !== 'undefined' && (
                                <Icon type="close" className="vdp-notification__dismiss" onClick={onClickClose} />
                            )}
                            {children}
                        </animated.div>
                    )
            )}
            {hasBackdrop && <Backdrop isOpen={isOpen} onClick={onClickBackdrop} />}
        </>
    );
};

Notification.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    /** Called when user clicks on the 'X' button in the Notification. If a click handler is not passed, the 'X' will not be displayed */
    onClickClose: PropTypes.func,
    hasBackdrop: PropTypes.bool,
    style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number])),
    onClickBackdrop: PropTypes.func
};

export default Notification;
