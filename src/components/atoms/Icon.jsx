import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({ children, className, size, type, ...htmlAttributes }) => {
    const iconClassNames = classNames('vdp-icon', {
        [`--${size}`]: size,
        [` vdp-icon-${type}`]: type,
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
    size: PropTypes.oneOf(['lg', 'xl', 'sm']),
    type: PropTypes.string
};

export default Icon;
