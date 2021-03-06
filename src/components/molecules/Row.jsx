import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const getFlexDirectionClass = (flexDirection, device) => {
    if (flexDirection === 'column') {
        return `--col-${device}`;
    }
    if (flexDirection === 'column-reverse') {
        return `--col-reverse-${device}`;
    }
    if (flexDirection === 'row-reverse') {
        return `--reverse-${device}`;
    }
};

const Row = ({ className = '', children, justify, align, flexDirection = [], flexWrap = [], ...htmlAttributes }) => {
    const rowClassNames = classNames('vdp-row', {
        [className]: className,
        [`--justify-${justify}`]: justify,
        [`--align-${align}`]: align,
        '--column': flexDirection === 'column',
        [getFlexDirectionClass(flexDirection[0], 'mobile')]: Array.isArray(flexDirection) && flexDirection[0],
        [getFlexDirectionClass(flexDirection[1], 'tablet')]: Array.isArray(flexDirection) && flexDirection[1],
        [getFlexDirectionClass(flexDirection[2], 'desktop')]: Array.isArray(flexDirection) && flexDirection[2],
        [`--${flexWrap}-all`]: flexWrap && !Array.isArray(flexWrap),
        [`--${flexWrap[0]}-mobile`]: Array.isArray(flexWrap) && flexWrap[0],
        [`--${flexWrap[1]}-tablet`]: Array.isArray(flexWrap) && flexWrap[1],
        [`--${flexWrap[2]}-desktop`]: Array.isArray(flexWrap) && flexWrap[2]
    });

    return (
        <div className={rowClassNames} {...htmlAttributes}>
            {children}
        </div>
    );
};

Row.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    justify: PropTypes.oneOf(['start', 'center', 'end', 'around', 'between']),
    align: PropTypes.oneOf(['top', 'bottom', 'center']),
    /** sets flex-wrap css property. Use array for responsive breakpoint where the first item correspond to the smallest breakpoint. If you pass a value instead, will apply to all breakpoint  */
    flexDirection: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOf(['row', 'column', 'column-reverse', 'row-reverse']))
    ]),
    /** sets flex-wrap css property. Use array for responsive breakpoint where the first item correspond to the smallest breakpoint. If you pass a value instead, will apply to all breakpoint  */
    flexWrap: PropTypes.oneOf([PropTypes.string, PropTypes.arrayOf(PropTypes.oneOf(['wrap', 'nowrap']))])
};

export default Row;
