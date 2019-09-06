import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import { useMedia } from 'react-use-media';

import ModalHeader from '../atoms/ModalHeader';
import ModalBody from '../atoms/ModalBody';
import ModalFooter from '../atoms/ModalFooter';
import Backdrop from '../atoms/Backdrop';

const Modal = props => {
    const {
        backgroundImage,
        className = '',
        disableBackdrop = false,
        isOpen = false,
        type = '',
        children,
        onClickBackdrop = () => {},
        ...htmlAtrributes
    } = props;

    const isMobile = useMedia({ maxWidth: 768 });

    const sheet = {
        open: { bottom: '0%' },
        closed: { bottom: '-100%' }
    };

    const transitions = useTransition(isOpen, null, {
        from: { opacity: 0, ...(type === 'sheet' ? sheet.closed : {}), ...(!isMobile ? { transform: 'scale(0.5)' } : {}) },
        enter: { opacity: 1, ...(type === 'sheet' ? sheet.open : {}), ...(!isMobile ? { transform: 'scale(1)' } : {}) },
        leave: { opacity: 0, ...(type === 'sheet' ? sheet.closed : {}), ...(!isMobile ? { transform: 'scale(0.5)' } : {}) }
    });

    const typeClassName = !!type.length ? `--${type}` : type;

    const style = !!backgroundImage ? { backgroundImage: `url('${backgroundImage}')` } : null;
    return (
        <>
            {transitions.map(
                ({ key, item, props: animationProps }) =>
                    item && (
                        <Fragment key={key}>
                            <animated.aside
                                className={`vdp-react-modal${typeClassName}${!!className ? ` ${className}` : ''}`}
                                {...htmlAtrributes}>
                                <animated.div style={{ ...animationProps, ...style }} className="vdp-react-modal__container">
                                    {children}
                                </animated.div>
                            </animated.aside>
                        </Fragment>
                    )
            )}
            {!disableBackdrop && <Backdrop isOpen={isOpen} onClick={onClickBackdrop} />}
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
    title: PropTypes.string,
    type: PropTypes.oneOf([Modal.TYPES.SHEET, Modal.TYPES.FULL_SCREEN]),
    onClickBackdrop: PropTypes.func
};

export default Modal;
