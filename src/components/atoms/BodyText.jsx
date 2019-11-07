import React from 'react';
import PropTypes from 'prop-types';
import { getTypeClassNames, TYPOGRAPHY_PROP_TYPES } from '../../utils/typographyUtils';

const BodyText = ({
    children,
    className,
    importance = 1,
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
    const classNames = getTypeClassNames(`vdp-type-body${importance}`, {
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

BodyText.propTypes = {
    importance: PropTypes.oneOf([1, 2]),
    ...TYPOGRAPHY_PROP_TYPES
};

export default BodyText;
