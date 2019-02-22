import React from 'react';
import PropTypes from 'prop-types';
import { getTypeClassNames, TYPOGRAPHY_PROP_TYPES } from '../../utils/typographyUtils';

const Link = ({ children, className, href, onClick, weight, height, state, alignment, capitalization, list, truncate, ...attributes }) => {
    Link.propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        href: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        ...TYPOGRAPHY_PROP_TYPES
    };

    const linkClassNames = getTypeClassNames('vdp-type-link', {
        weight,
        height,
        state,
        alignment,
        capitalization,
        truncate,
        list,
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
