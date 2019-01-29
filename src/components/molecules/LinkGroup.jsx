import React from 'react';
import PropTypes from 'prop-types';

const LinkGroup = ({ children, type, className, ...htmlAttributes }) => {
    const baseLinkGroupClass = `vp-link-group${type ? `--${type}` : ''}`;
    const props = {
        className: className ? `${baseLinkGroupClass} ${className}` : baseLinkGroupClass,
        ...htmlAttributes
    };
    return (
        <ul {...{ ...props, ...htmlAttributes }}>
            {React.Children.toArray(children).map(child => (
                <li className="vp-link-group__item">{child}</li>
            ))}
        </ul>
    );
};

LinkGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    /** renders to html class `--striped`, `--muted` */
    type: PropTypes.oneOf(['striped', 'muted'])
};

export default LinkGroup;
