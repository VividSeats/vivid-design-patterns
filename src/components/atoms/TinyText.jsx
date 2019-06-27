import React from 'react';
import { getTypeClassNames, TYPOGRAPHY_PROP_TYPES } from '../../utils/typographyUtils';

const SmallText = ({ children, className, weight, height, state, alignment, capitalization, truncate, list, ...htmlAttributes }) => {
    const classNames = getTypeClassNames('vdp-type-tiny', {
        weight,
        height,
        state,
        alignment,
        capitalization,
        truncate,
        list,
        className
    });
    const attributes = {
        className: classNames,
        ...htmlAttributes
    };

    return <p {...attributes}>{children}</p>;
};

SmallText.propTypes = TYPOGRAPHY_PROP_TYPES;

export default SmallText;
