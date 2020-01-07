import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Column = ({ className = '', sm, md, lg, xl, alignSelf, children, ...htmlAttributes }) => {
    const columnClassNames = classNames('vdp-col', {
        [className]: className,
        [`--sm-${sm}`]: sm,
        [`--md-${md}`]: md,
        [`--lg-${lg}`]: lg,
        [`--xl-${xl}`]: xl,
        [`--align-self-${alignSelf}`]: alignSelf
    });

    return (
        <div className={columnClassNames} {...htmlAttributes}>
            {children}
        </div>
    );
};

Column.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    /** number of columns taken in a 12 column grid on mobile */
    sm: PropTypes.number,
    /** number of columns taken in a 12 column grid on tablet */
    md: PropTypes.number,
    /** number of columns taken in a 12 column grid on desktop */
    lg: PropTypes.number,
    /** number of columns taken in a 12 column grid on extra large desktop */
    xl: PropTypes.number,
    /** align-self css property with values flex-start, center, and flex-end corresponding to prop values top, middle and bottom */
    alignSelf: PropTypes.oneOf(['top', 'middle', 'bottom'])
};

export default Column;
