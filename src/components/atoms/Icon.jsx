import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({ children, className, size, type, ...htmlAttributes }) => {
    const iconClassNames = classNames('vdp-icon', {
        [`-${type}`]: type,
        [`--${size}`]: size,
        [`${className}`]: className
    }).replace(/ -/g, '-');

    const attributes = {
        className: iconClassNames,
        ...htmlAttributes
    };

    return <i {...attributes}>{children}</i>;
};

Icon.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    size: PropTypes.oneOf(['lg', 'xl']),
    type: PropTypes.string
};

export default Icon;
