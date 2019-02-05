import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

/* eslint no-console: 0 */
/* eslint react/no-unused-prop-types: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint no-underscore-dangle: 0 */

const __dummyPropTypesComponent = () => React.createElement('div', null, `Hello`);

function getTypeClassNames(baseClassName, { weight, height, state, alignment, capitalization, truncate, list, className }) {
    return classNames(baseClassName, {
        [className]: className,
        '--blk': weight === 'blk' || weight === 'black',
        '--bld': weight === 'bld' || weight === 'bold',
        '--med': weight === 'med' || weight === 'medium',
        '--truncate': truncate,
        '--list': list,
        [`--${height}`]: height,
        [`--${state}`]: state,
        [`--${alignment}`]: alignment,
        [`--${capitalization}`]: capitalization
    });
}

const TYPOGRAPHY_PROP_TYPES = {
    className: PropTypes.string,
    children: PropTypes.node,
    weight: PropTypes.oneOf(['black', 'bold', 'medium']),
    height: PropTypes.oneOf(['compressed', 'expanded']),
    state: PropTypes.oneOf(['disabled', 'inverted', 'muted']),
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    capitalization: PropTypes.oneOf(['uppercase', 'lowercase']),
    truncate: PropTypes.bool,
    list: PropTypes.bool
};

__dummyPropTypesComponent.propTypes = TYPOGRAPHY_PROP_TYPES;

export { getTypeClassNames, TYPOGRAPHY_PROP_TYPES, __dummyPropTypesComponent };
