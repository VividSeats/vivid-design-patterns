import React from 'react';
import PropTypes from 'prop-types';
import { getTypeClassNames, TYPOGRAPHY_PROP_TYPES } from '../../utils/typographyUtils';

const Title = ({
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
    as,
    ...htmlAttributes
}) => {
    const classNames = getTypeClassNames(`vdp-type-title-${size}`, {
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

    if (typeof as !== 'undefined') {
        return React.createElement(as, { ...attributes }, children);
    }

    switch (size) {
        case 'md': {
            return <h2 {...attributes}>{children}</h2>;
        }
        case 'sm': {
            return <h3 {...attributes}>{children}</h3>;
        }
        default: {
            return <h1 {...attributes}>{children}</h1>;
        }
    }
};

Title.propTypes = {
    size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
    ...TYPOGRAPHY_PROP_TYPES
};

export default Title;
