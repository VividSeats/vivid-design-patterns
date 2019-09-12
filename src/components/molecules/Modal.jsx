import 'core-js';
import 'core-js/es7';
import 'core-js/es6';
import React from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring/web.cjs';
import useMedia from 'use-media';

import ModalHeader from '../atoms/ModalHeader';
import ModalBody from '../atoms/ModalBody';
import ModalFooter from '../atoms/ModalFooter';
import Backdrop from '../atoms/Backdrop';

const Modal = ({
    backgroundImage,
    className = '',
    disableBackdrop = false,
    isOpen = false,
    type = '',
    children,
    onClickBackdrop = () => {},
    ...htmlAtrributes
}) => {
    const isMobile = useMedia({ maxWidth: 768 });

    const sheet = {
        open: { bottom: '0%' },
        closed: { bottom: '-100%' }
    };

    const transitions = useTransition(isOpen, null, {
        from: type === 'sheet' && isMobile ? sheet.closed : { opacity: 1, transform: 'scale(0.3)' },
        enter: type === 'sheet' && isMobile ? sheet.open : { opacity: 1, transform: 'scale(1)' },
        leave: type === 'sheet' && isMobile ? sheet.closed : { opacity: 0, transform: 'scale(0.3)' }
    });

    const typeClassName = !!type.length ? `--${type}` : type;

    const style = !!backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : null;
    return (
        <>
            {transitions.map(
                ({ key, item, props: animationProps }) =>
                    item && (
                        <animated.aside
                            key={key}
                            className={`vdp-react-modal ${typeClassName}${!!className ? ` ${className}` : ''}`}
                            onClick={onClickBackdrop}
                            {...htmlAtrributes}>
                            <animated.div
                                style={{ ...animationProps, ...style }}
                                onClick={e => e.stopPropagation()}
                                className="vdp-react-modal__container">
                                {children}
                            </animated.div>
                        </animated.aside>
                    )
            )}
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
    className: PropTypes.string,
    children: PropTypes.node,
    isOpen: PropTypes.bool.isRequired,
    disableBackdrop: PropTypes.bool,
    type: PropTypes.oneOf([Modal.TYPES.SHEET, Modal.TYPES.FULL_SCREEN]),
    onClickBackdrop: PropTypes.func
};

export default Modal;
