import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

/* eslint no-console: 0 */
/* eslint react/no-unused-prop-types: 0 */
/* eslint react/jsx-filename-extension: 0 */
/* eslint no-underscore-dangle: 0 */

class __dummyPropTypesComponent extends React.Component {
    render() {
        console.warn(
            'Warning: this is a dummy component used to generated proptypes for React Docgen and DOCZ. Do not use this component in production'
        );
        return React.createElement('div', null, `Hello`);
    }
}

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
    /** Font weight. --blk, --bld, ---med */
    weight: PropTypes.oneOf(['black', 'bold', 'medium']),
    /** Line height. --compressed, --expanded */
    height: PropTypes.oneOf(['compressed', 'expanded']),
    /** --disabled, --inverted, --muted */
    state: PropTypes.oneOf(['disabled', 'inverted', 'muted']),
    /** Text alignment  --left, --center, --right */
    alignment: PropTypes.oneOf(['left', 'center', 'right']),
    /** ---uppercase, --lowercase */
    capitalization: PropTypes.oneOf(['uppercase', 'lowercase']),
    /** Truncate text with ellipsis. --truncate */
    truncate: PropTypes.bool,
    /**  Add padding for list items. --list */
    list: PropTypes.bool
};

__dummyPropTypesComponent.propTypes = TYPOGRAPHY_PROP_TYPES;

export { getTypeClassNames, TYPOGRAPHY_PROP_TYPES, __dummyPropTypesComponent };
