import React from 'react';
import PropTypes from 'prop-types';
import { getTypeClassNames, TYPOGRAPHY_PROP_TYPES } from '../../utils/typographyUtils';

const Headline = ({
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
    ...htmlAttributes
}) => {
    const classNames = getTypeClassNames(`vdp-type-headline${importance}`, {
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

    switch (importance) {
        case 1: {
            return <h1 {...attributes}>{children}</h1>;
        }

        case 2: {
            return <h2 {...attributes}>{children}</h2>;
        }

        case 3: {
            return <h3 {...attributes}>{children}</h3>;
        }

        case 4: {
            return <h4 {...attributes}>{children}</h4>;
        }

        case 5: {
            return <h5 {...attributes}>{children}</h5>;
        }

        case 6: {
            return <h6 {...attributes}>{children}</h6>;
        }
        default: {
            return <h1 {...attributes}>{children}</h1>;
        }
    }
};

Headline.propTypes = {
    importance: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
    ...TYPOGRAPHY_PROP_TYPES
};

export default Headline;
