import React from 'react';
import { getTypeClassNames, TYPOGRAPHY_PROP_TYPES } from '../../utils/typographyUtils';

const Subhead = ({ children, className, weight, height, state, alignment, capitalization, truncate, list, opaque, ...htmlAttributes }) => {
    const classNames = getTypeClassNames('vdp-type-subhead', {
        weight,
        height,
        state,
        alignment,
        capitalization,
        truncate,
        list,
        className,
        opaque
    });
    const attributes = {
        className: classNames,
        ...htmlAttributes
    };

    return <p {...attributes}>{children}</p>;
};

Subhead.propTypes = TYPOGRAPHY_PROP_TYPES;

export default Subhead;
