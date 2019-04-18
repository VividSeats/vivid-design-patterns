import React from 'react';
import PropTypes from 'prop-types';
import Headline from './Headline';

const ModalHeader = ({ children, importance = 6, title, ...htmlAttributes }) => (
    <div className="vdp-modal__header" {...htmlAttributes}>
        <Headline importance={importance}>{title}</Headline>
        {children}
    </div>
);

ModalHeader.displayName = 'ModalHeader';

ModalHeader.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    importance: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    title: PropTypes.string
};

export default ModalHeader;
