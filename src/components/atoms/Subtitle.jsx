import React from 'react';
import PropTypes from 'prop-types';
import { getTypeClassNames, TYPOGRAPHY_PROP_TYPES } from '../../utils/typographyUtils';

const Subtitle = ({
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
    ...htmlAttributes
}) => {
    const classNames = getTypeClassNames(`vp-type-subtitle${importance}`, {
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

Subtitle.propTypes = {
    importance: PropTypes.oneOf([1, 2]),
    ...TYPOGRAPHY_PROP_TYPES
};

export default Subtitle;
