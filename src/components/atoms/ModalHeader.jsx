import React from 'react';
import PropTypes from 'prop-types';
import Title from './Title';

const ModalHeader = ({ children, className = '', title, ...htmlAttributes }) => (
    <div className={`vdp-modal__header ${className}`} {...htmlAttributes}>
        {!!title && <Title>{title}</Title>}
        {children}
    </div>
);

ModalHeader.displayName = 'ModalHeader';

ModalHeader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    title: PropTypes.string
};

export default ModalHeader;
