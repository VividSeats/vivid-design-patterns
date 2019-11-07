import React from 'react';
import { getTypeClassNames, TYPOGRAPHY_PROP_TYPES } from '../../utils/typographyUtils';

const SmallText = ({
    children,
    className,
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
    const classNames = getTypeClassNames('vdp-type-small', {
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

SmallText.propTypes = TYPOGRAPHY_PROP_TYPES;

export default SmallText;
