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
import { Transition, animated } from 'react-spring/renderprops.cjs';
import useMedia from 'use-media';

import ModalHeader from '../atoms/ModalHeader';
import ModalBody from '../atoms/ModalBody';
import ModalFooter from '../atoms/ModalFooter';
import Backdrop from '../atoms/Backdrop';

/* eslint-disable react/display-name */

const Modal = ({
    backgroundImage,
    className = '',
    disableBackdrop = false,
    isOpen = false,
    type = '',
    children,
    onClickBackdrop = () => {},
    animate = true,
    ...htmlAtrributes
}) => {
    const isMobile = useMedia({ maxWidth: 768 });
    const sheet = {
        open: { bottom: '0%' },
        closed: { bottom: '-100%' }
    };

    const transitionProps = {
        from: type === 'sheet' && isMobile ? sheet.closed : { opacity: 1, transform: 'scale(0.3)' },
        enter: type === 'sheet' && isMobile ? sheet.open : { opacity: 1, transform: 'scale(1.0)' },
        leave: type === 'sheet' && isMobile ? sheet.closed : { opacity: 0, transform: 'scale(0.3)' }
    };

    const typeClassName = !!type.length ? `--${type}` : type;
    const isIe11 = !!window.MSInputMethodContext && !!document.documentMode;
    const shouldAnimate = !isIe11 && animate;
    const backgroundStyle = !!backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : null;
    return (
        <>
            <Transition native items={isOpen} immediate={!shouldAnimate} {...transitionProps}>
                {show =>
                    show &&
                    (animationProps => {
                        return (
                            <animated.aside
                                className={`vdp-react-modal ${typeClassName}${!!className ? ` ${className}` : ''}`}
                                onClick={onClickBackdrop}
                                {...htmlAtrributes}>
                                <animated.div
                                    style={{ ...animationProps, ...backgroundStyle }}
                                    onClick={e => e.stopPropagation()}
                                    className={`vdp-react-modal__container ${isOpen ? '--open' : ''}`}>
                                    {children}
                                </animated.div>
                            </animated.aside>
                        );
                    })
                }
            </Transition>
            {!disableBackdrop && <Backdrop isOpen={isOpen} />}
        </>
    );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Backdrop = Backdrop;

Modal.TYPES = {
    SHEET: 'sheet',
    FULL_SCREEN: 'full-screen'
};

Modal.propTypes = {
    backgroundImage: PropTypes.string,
    animate: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
    isOpen: PropTypes.bool.isRequired,
    disableBackdrop: PropTypes.bool,
    type: PropTypes.oneOf([Modal.TYPES.SHEET, Modal.TYPES.FULL_SCREEN]),
    onClickBackdrop: PropTypes.func
};

export default Modal;
