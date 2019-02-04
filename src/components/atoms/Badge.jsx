import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Badge = ({ children, indicates, type, className, size, ...htmlAttributes }) => {
    const baseButtonClass = 'vp-badge';
    const buttonClassNames = classNames(baseButtonClass, {
        [`--${indicates}`]: indicates,
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
    /** badge styles, either `--success`, `--warning`, `--error`*/
    indicates: PropTypes.oneOf(['success', 'warning', 'error']).isRequired,
    className: PropTypes.string
};

export default Badge;
