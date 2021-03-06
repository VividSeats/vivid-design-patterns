import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Badge = ({ children, styleAs, type, className, large, ...htmlAttributes }) => {
    const badgeClassNames = classNames('vdp-badge', {
        [`--${type}`]: type,
        [`--${styleAs}`]: styleAs,
        [className]: className,
        '--lg': large
    });

    return (
        <span className={badgeClassNames} {...htmlAttributes}>
            {children}
        </span>
    );
};

Badge.propTypes = {
    children: PropTypes.node,
    /** badge types e.g., angled, counter, rounded */
    type: PropTypes.oneOf(['angled', 'count', 'rounded']),
    /** sets the style of the default badge, either `success`, `warning`, `error` (Note: 'angled' and 'count' types are unaffected by this) */
    styleAs: PropTypes.oneOf(['success', 'warning', 'error']),
    /** sets the size of the default badge type to be large (Note: 'angled' and 'count' types are unaffected by this) */
    large: PropTypes.bool,
    className: PropTypes.string
};

export default Badge;
