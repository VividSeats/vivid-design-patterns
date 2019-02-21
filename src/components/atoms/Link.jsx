import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Link = ({ children, className, href, onClick, type = 'link', ...attributes }) => {
    Link.propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        href: PropTypes.string.isRequired,
        type: PropTypes.oneOf(['link', 'anchor']),
        onClick: PropTypes.func
    };

    const baseClassName = type === 'anchor' ? 'vdp-anchor' : 'vdp-type-link';

    const props = {
        href,
        onClick,
        role: 'link',
        className: classNames(baseClassName, {
            [className]: !!className
        }),
        ...attributes
    };

    return <a {...props}>{children}</a>;
};

export default Link;
