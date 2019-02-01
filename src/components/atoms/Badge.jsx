import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Badge = ({ children, styles, type, className, size, ...htmlAttributes }) => {
    const baseButtonClass = 'vp-badge';
    const buttonClassNames = classNames(baseButtonClass, {
        [`--${styles}`]: styles,
        [`--${type}`]: type,
        [`--${size}`]: size
    });

    const props = {
        className: className ? `${buttonClassNames} ${className}` : buttonClassNames,
        ...htmlAttributes
    };

    return <span {...props}>{children}</span>;
};

Badge.propTypes = {
    children: PropTypes.node,
    /** badge types e.g., default, angled, counter */
    type: PropTypes.oneOf(['default', 'angled', 'counter']),
    /** renders to html class `--success`, `--warning`, `--error`*/
    styles: PropTypes.oneOf(['success', 'warning', 'error']),
    className: PropTypes.string
};

export default Badge;
