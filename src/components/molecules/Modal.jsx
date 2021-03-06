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
        },
        initial: {
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
        },
        initial: {
            scale: 0.3,
            opacity: 0
        }
    };

    const dontDestroyOnCloseMobileSheetAnimation = {
        enter: {
            bottom: isOpen ? '0%' : '-100%'
        },
        initial: false
    };

    const dontDestroyOnCloseDefaultAnimation = {
        enter: {
            scale: isOpen ? 1 : 0.3,
            opacity: isOpen ? 1 : 0
        },
        initial: false
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

const CoreModal = React.forwardRef(
    (
        {
            handleBackdropClick,
            handleKeyDown,
            className,
            backgroundStyle,
            onStart,
            onRest,
            animateProps,
            isOpen,
            children,
            overrideStyles = {},
            ...htmlAttributes
        },
        modalRef
    ) => (
        <aside onClick={handleBackdropClick} style={overrideStyles} onKeyDown={handleKeyDown} className={className} {...htmlAttributes}>
            <motion.div
                onAnimationStart={onStart}
                onAnimationComplete={onRest}
                initial={animateProps.initial}
                exit={animateProps.exit}
                animate={animateProps.enter}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                style={backgroundStyle}
                tabIndex="-1"
                ref={modalRef}
                onKeyDown={handleKeyDown}
                onClick={e => e.stopPropagation()}
                className={`vdp-react-modal__container ${isOpen ? '--open' : ''}`}>
                {children}
            </motion.div>
        </aside>
    )
);

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
    ...htmlAttributes
}) => {
    const modalRef = React.useRef();
    const isMobile = useMedia({ maxWidth: 768 });
    const [isRested, setIsRested] = React.useState(true);
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
    const overrideStyles = isRested && !isOpen && !destroyOnClose ? { display: 'none' } : {};
    const backgroundStyle = !!backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : {};
    const modalProps = {
        handleBackdropClick,
        handleKeyDown,
        backgroundStyle,
        overrideStyles,
        onStart,
        onRest,
        animateProps,
        isOpen,
        ref: modalRef,
        className: modalClassNames,
        key: `${isMobile ? 'mobile-' : 'desktop-'}${type}`,
        ...htmlAttributes
    };
    return (
        <>
            {!destroyOnClose ? (
                <CoreModal {...modalProps}>{children}</CoreModal>
            ) : (
                <AnimatePresence>{isOpen && <CoreModal {...modalProps}>{children}</CoreModal>}</AnimatePresence>
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

CoreModal.propTypes = {
    ...Modal.propTypes
};

export default Modal;
