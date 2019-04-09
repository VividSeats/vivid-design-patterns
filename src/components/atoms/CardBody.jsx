import React from 'react';
import PropTypes from 'prop-types';

const CardBody = ({ className = '', children, collapse, ...htmlAttributes }) => (
    <div className={`vdp-card__body ${className}`} {...htmlAttributes}>
        <h2>Tester</h2>
        {!collapse && <p>Hello</p>}
        {children}
    </div>
);

CardBody.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    collapse: PropTypes.node.isRequired
};

export default CardBody;
