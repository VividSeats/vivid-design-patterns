import 'core-js/es6/array';
import 'core-js/es6/object';
import 'core-js/es7/object';
import 'core-js/es6/string';
import 'core-js/es6/symbol';
import 'core-js/es6/weak-set';
import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import useMedia from 'use-media';
import classNames from 'classnames';

import ModalHeader from '../atoms/ModalHeader';
import ModalBody from '../atoms/ModalBody';
import ModalFooter from '../atoms/ModalFooter';
import Backdrop from '../atoms/Backdrop';

/* eslint-disable react/display-name */
const getAnimationProps = ({ isMobile, isOpen, destroyOnClose, type }) => {
    const isMobileSheetModal = isMobile && type === 'sheet';
    const mobileSheetAnimation = {
        enter: {
            bottom: '0%'
        },
        exit: {
            bottom: '-100%'
        }
    };

    const defaultModalAnimation = {
        enter: {
            scale: 1,
            opacity: 1
        },
        exit: {
            scale: 0.3,
            opacity: 0
        }
    };

    const dontDestroyOnCloseMobileSheetAnimation = {
        enter: {
            bottom: isOpen ? '0%' : '-100%'
        }
    };

    const dontDestroyOnCloseDefaultAnimation = {
        enter: {
            scale: isOpen ? 1 : 0.3,
            opacity: isOpen ? 1 : 0
        }
    };

    if (destroyOnClose) {
        if (isMobileSheetModal) {
            return mobileSheetAnimation;
        }

        return defaultModalAnimation;
    }

    if (isMobileSheetModal) {
        return dontDestroyOnCloseMobileSheetAnimation;
    }

    return dontDestroyOnCloseDefaultAnimation;
};

const Modal = ({
    destroyOnClose = true,
    backgroundImage,
    className = '',
    disableBackdrop = false,
    isOpen = false,
    type = '',
    children,
    /** Defaults to onClose */
    canCloseWithBackdropClick = true,
    onClickBackdrop,
    closeWithEscapeKey = true,
    /** Method called when user wants to close the Modal */
    onClose = () => {},
    /** Method called when modal is fully opened and animation is complete */
    onOpened = () => {},
    /** Method called when modal is fully closed and animation is complete */
    onClosed = () => {},
    size,
    ...htmlAtrributes
}) => {
    const modalRef = React.useRef();
    const isMobile = useMedia({ maxWidth: 768 });
    const [isRested, setIsRested] = React.useState(false);
    // Focus on modal once animation is finished so user can hit escape
    React.useLayoutEffect(() => {
        if (isOpen && !!modalRef.current) {
            const isModalFocused = document.activeElement === modalRef.current || modalRef.current.contains(document.activeElement);
            if (!isModalFocused) {
                modalRef.current.focus();
            }
        }
    }, [isOpen, isRested]);

    const handleKeyDown = e => {
        const { key, keyCode, which } = e;
        if (closeWithEscapeKey && (key === 'Escape' || which === 27 || keyCode === 27)) {
            onClose();
            e.preventDefault();
        }
    };

    const handleBackdropClick = () => {
        if (canCloseWithBackdropClick && typeof onClickBackdrop === 'undefined') {
            onClose();
        } else if (!!onClickBackdrop) {
            onClickBackdrop();
        }
    };

    const onStart = () => {
        setIsRested(false);
    };

    const onRest = () => {
        setIsRested(true);
        if (isOpen) {
            onOpened();
        } else {
            onClosed();
        }
    };

    const modalClassNames = classNames('vdp-react-modal', {
        [`--${type}`]: type,
        [`--${size}`]: size,
        [className]: className
    });

    const animateProps = getAnimationProps({ isMobile, isOpen, destroyOnClose, type });
    const backgroundStyle = !!backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : {};
    return (
        <>
            <AnimatedModalWrapper isOpen={isOpen} destroyOnClose={destroyOnClose}>
                <aside onClick={handleBackdropClick} onKeyDown={handleKeyDown} className={modalClassNames} {...htmlAtrributes}>
                    <motion.div
                        style={backgroundStyle}
                        onAnimationStart={onStart}
                        onAnimationComplete={onRest}
                        initial={animateProps.exit}
                        exit={animateProps.exit}
                        animate={animateProps.enter}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        tabIndex="-1"
                        ref={modalRef}
                        onKeyDown={handleKeyDown}
                        onClick={e => e.stopPropagation()}
                        className={`vdp-react-modal__container ${isOpen ? '--open' : ''}`}>
                        {children}
                    </motion.div>
                </aside>
            </AnimatedModalWrapper>
            {!disableBackdrop && <Backdrop isOpen={isOpen} />}
        </>
    );
};

const AnimatedModalWrapper = ({ isOpen, destroyOnClose, children }) => {
    if (!destroyOnClose) {
        return children;
    }

    return <AnimatePresence>{isOpen ? children : null}</AnimatePresence>;
};

AnimatedModalWrapper.propTypes = {
    isOpen: PropTypes.bool,
    destroyOnClose: PropTypes.bool,
    children: PropTypes.node
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Backdrop = Backdrop;

Modal.TYPES = {
    SHEET: 'sheet',
    FULL_SCREEN: 'full-screen'
};

Modal.SIZES = {
    SMALL: 'sm',
    MEDIUM: 'md',
    LARGE: 'lg'
};

Modal.propTypes = {
    onOpened: PropTypes.func,
    onClosed: PropTypes.func,
    backgroundImage: PropTypes.string,
    animate: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node,
    isOpen: PropTypes.bool.isRequired,
    disableBackdrop: PropTypes.bool,
    type: PropTypes.oneOf([Modal.TYPES.SHEET, Modal.TYPES.FULL_SCREEN]),
    onClickBackdrop: PropTypes.func,
    destroyOnClose: PropTypes.bool,
    onClose: PropTypes.func,
    canCloseWithBackdropClick: PropTypes.bool,
    closeWithEscapeKey: PropTypes.bool,
    size: PropTypes.oneOf([Modal.SIZES.SMALL, Modal.SIZES.MEDIUM, Modal.SIZES.LARGE])
};

export default Modal;
