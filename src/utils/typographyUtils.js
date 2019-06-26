import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

/* eslint no-console: 0 */
/* eslint react/no-unused-prop-types: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint no-underscore-dangle: 0 */

const __dummyPropTypesComponent = () => React.createElement('div', null, `Hello`);

function getTypeClassNames(baseClassName, { weight, height, state, alignment, capitalization, truncate, list, className }) {
    const stateClasses = () => {
        return Array.isArray(state) ? state.map(className => `--${className}`) : [{ [`--${state}`]: state }];
    };
    return classNames(baseClassName, [
        {
            [className]: className,
            '--blk': weight === 'blk' || weight === 'black',
            '--bld': weight === 'bld' || weight === 'bold',
            '--med': weight === 'med' || weight === 'medium',
            '--reg': weight === 'reg' || weight === 'regular',
            '--truncate': truncate,
            '--list': list,
            [`--${height}`]: height,
            [`--${alignment}`]: alignment,
            [`--${capitalization}`]: capitalization
        },
        ...stateClasses()
    ]);
}

const TYPOGRAPHY_PROP_TYPES = {
    className: PropTypes.string,
    children: PropTypes.node,
    /** Font weight */
    weight: PropTypes.oneOf(['black', 'bold', 'medium', 'regular']),
    /** Line height. */
    height: PropTypes.oneOf(['compressed', 'expanded']),

    state: PropTypes.oneOfType([PropTypes.array, PropTypes.oneOf(['disabled', 'inverted', 'muted', 'opaque'])]),
    /** Text alignment */
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** type casing */
    capitalization: PropTypes.oneOf(['uppercase', 'lowercase']),
    /** Truncate text with ellipsis. */
    truncate: PropTypes.bool,
    /**  Add padding for list items. */
    list: PropTypes.bool
};

__dummyPropTypesComponent.propTypes = TYPOGRAPHY_PROP_TYPES;

export { getTypeClassNames, TYPOGRAPHY_PROP_TYPES, __dummyPropTypesComponent };
