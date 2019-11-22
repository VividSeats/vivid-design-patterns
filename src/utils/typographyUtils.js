import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

/* eslint no-console: 0 */
/* eslint react/no-unused-prop-types: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint no-underscore-dangle: 0 */

const __dummyPropTypesComponent = () => React.createElement('div', null, `Hello`);

function getTypeClassNames(baseClassName, { weight, height, state, alignment, capitalization, truncate, list, className, opaque }) {
    return classNames(baseClassName, {
        [className]: className,
        '--blk': weight === 'blk' || weight === 'black',
        '--bld': weight === 'bld' || weight === 'bold',
        '--med': weight === 'med' || weight === 'medium',
        '--reg': weight === 'reg' || weight === 'regular',
        '--truncate': truncate,
        '--list': list,
        '--opaque': opaque,
        [`--${height}`]: height,
        [`--${state}`]: state,
        [`--${alignment}`]: alignment,
        [`--${capitalization}`]: capitalization
    });
}

const TYPOGRAPHY_PROP_TYPES = {
    className: PropTypes.string,
    children: PropTypes.node,
    /** Font weight */
    weight: PropTypes.oneOf(['black', 'bold', 'medium', 'regular']),
    /** Line height. */
    height: PropTypes.oneOf(['compressed', 'expanded']),

    state: PropTypes.oneOf(['disabled', 'inverted', 'muted', 'hover', 'error', 'success']),
    /** Text alignment */
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** type casing */
    capitalization: PropTypes.oneOf(['uppercase', 'lowercase']),
    /** Truncate text with ellipsis. */
    truncate: PropTypes.bool,
    /**  Add padding for list items. */
    list: PropTypes.bool,
    /** Underlying rendered element */
    as: PropTypes.oneOf(['p', 'small', 'strong', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'span', 'div']),
    opaque: PropTypes.bool
};

__dummyPropTypesComponent.propTypes = TYPOGRAPHY_PROP_TYPES;

export { getTypeClassNames, TYPOGRAPHY_PROP_TYPES, __dummyPropTypesComponent };
