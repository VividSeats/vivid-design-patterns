import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Link = ({ children, className, href, onClick, ...attributes }) => {
    Link.propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        href: PropTypes.string.isRequired,
        onClick: PropTypes.func
    };

    const props = {
        href,
        onClick,
        role: 'link',
        className: classNames('vdp-type-link', {
            [className]: !!className
        }),
        ...attributes
    };

    return <a {...props}>{children}</a>;
};

export default Link;
