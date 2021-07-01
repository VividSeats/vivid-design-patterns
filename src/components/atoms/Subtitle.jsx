import React from 'react';
import PropTypes from 'prop-types';
import { getTypeClassNames, TYPOGRAPHY_PROP_TYPES } from '../../utils/typographyUtils';

const Subtitle = ({
    children,
    className,
    size = 'sm',
    weight,
    height,
    state,
    alignment,
    capitalization,
    truncate,
    list,
    opaque,
    as = 'p',
    ...htmlAttributes
}) => {
    const classNames = getTypeClassNames(`vdp-type-subtitle-${size}`, {
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
    const attributes = {
        className: classNames,
        ...htmlAttributes
    };

    return React.createElement(as, { ...attributes }, children);
};

Subtitle.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
    ...TYPOGRAPHY_PROP_TYPES
};

export default Subtitle;
