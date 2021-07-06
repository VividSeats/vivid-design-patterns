import React from 'react';
import { getTypeClassNames, TYPOGRAPHY_PROP_TYPES } from '../../utils/typographyUtils';

const Overline = ({
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
    const classNames = getTypeClassNames('vdp-type-overline', {
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

Overline.propTypes = TYPOGRAPHY_PROP_TYPES;

export default Overline;
