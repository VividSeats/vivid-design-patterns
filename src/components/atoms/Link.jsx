import React from 'react';
import PropTypes from 'prop-types';
import { getTypeClassNames, TYPOGRAPHY_PROP_TYPES } from '../../utils/typographyUtils';

const Link = ({
    children,
    type = 'link',
    className,
    href,
    onClick,
    weight,
    height,
    state,
    alignment,
    capitalization,
    list,
    truncate,
    opaque,
    ...attributes
}) => {
    Link.propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        href: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['link', 'anchor']),
        onClick: PropTypes.func,
        ...TYPOGRAPHY_PROP_TYPES
    };

    const baseClassName = type === 'anchor' ? 'vdp-anchor' : 'vdp-type-link';
    const linkClassNames = getTypeClassNames(baseClassName, {
        weight,
        height,
        state,
        alignment,
        capitalization,
        truncate,
        list,
        opaque,
        className
    });

    const props = {
        href,
        onClick,
        role: 'link',
        className: linkClassNames,
        ...attributes
    };

    return <a {...props}>{children}</a>;
};

export default Link;
