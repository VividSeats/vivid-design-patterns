import React from 'react';
import PropTypes from 'prop-types';

/* eslint react/no-array-index-key: 0 */

const LinkGroup = ({ children, type, className, ...htmlAttributes }) => {
    const baseLinkGroupClass = `vdp-link-group${type ? `--${type}` : ''}`;
    const props = {
        className: className ? `${baseLinkGroupClass} ${className}` : baseLinkGroupClass,
        ...htmlAttributes
    };
    return (
        <ul {...{ ...props, ...htmlAttributes }}>
            {React.Children.toArray(children).map((child, i) => (
                <li key={i} className="vdp-link-group__item">
                    {child}
                </li>
            ))}
        </ul>
    );
};

LinkGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    /** renders to html class `--striped`, `--muted` */
    type: PropTypes.oneOf(['striped', 'muted', 'hover'])
};

export default LinkGroup;
