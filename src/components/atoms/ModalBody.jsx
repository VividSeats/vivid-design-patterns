import React from 'react';
import PropTypes from 'prop-types';

const ModalBody = ({ className = '', children, ...htmlAttributes }) => (
    <div className={`vdp-modal__body ${className}`} {...htmlAttributes}>
        {children}
    </div>
);

ModalBody.displayName = 'ModalBody';

ModalBody.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

export default ModalBody;
