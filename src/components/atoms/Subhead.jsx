import React from 'react';
import { getTypeClassNames, TYPOGRAPHY_PROP_TYPES } from '../../utils/typographyUtils';

const Subhead = ({
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

    return React.createElement(as, { ...attributes }, children);
};

Subhead.propTypes = TYPOGRAPHY_PROP_TYPES;

export default Subhead;
