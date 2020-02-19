import 'core-js/es6/array';
import 'core-js/es6/object';
import 'core-js/es6/string';
import 'core-js/es6/symbol';
import 'core-js/es6/weak-set';
import React from 'react';
import PropTypes from 'prop-types';
import { AnimatePresence, motion } from 'framer-motion';
import useMedia from 'use-media';
import Backdrop from '../atoms/Backdrop';
import Icon from '../atoms/Icon';

const mobileAnimation = {
    enter: { bottom: '0%' },
    exit: { bottom: '-100%' }
};

const defaultAnimation = {
    enter: { right: '0%' },
    leave: { right: '-100%' }
};

const Notification = ({ isOpen, children, className = '', onClickClose, hasBackdrop, onClickBackdrop, style = {}, ...htmlAttributes }) => {
    const isMobile = useMedia({ maxWidth: 768 });
    const animation = isMobile ? mobileAnimation : defaultAnimation;
    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={animation.exit}
                        animate={animation.enter}
                        exit={animation.exit}
                        className={`vdp-notification ${className}`}
                        {...htmlAttributes}>
                        {typeof onClickClose !== 'undefined' && (
                            <Icon type="close" className="vdp-notification__dismiss" onClick={onClickClose} />
                        )}
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
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
