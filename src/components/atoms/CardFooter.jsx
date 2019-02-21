import classNames from 'classnames';
import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = ({ className = '', children, centered = false, ...htmlAttributes }) => {
    const footerClassNames = classNames(`vdp-card__footer ${className}`, {
        '--centered': centered
    });

    return (
        <div className={footerClassNames} {...htmlAttributes}>
            {children}
        </div>
    );
};

CardFooter.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    /**  Center elements within the footer */
    centered: PropTypes.bool
};

export default CardFooter;
