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

const Row = ({
    className = '',
    children,
    justify,
    align,
    column,
    flexDirectionMobile,
    flexDirectionTablet,
    flexDirectionDesktop,
    ...htmlAttributes
}) => {
    const rowClassNames = classNames('vdp-row', {
        [className]: className,
        [`--justify-${justify}`]: justify,
        [`--align-${align}`]: align,
        '--column': column,
        [getFlexDirectionClass(flexDirectionMobile, 'mobile')]: flexDirectionMobile,
        [getFlexDirectionClass(flexDirectionTablet, 'tablet')]: flexDirectionTablet,
        [getFlexDirectionClass(flexDirectionDesktop, 'desktop')]: flexDirectionDesktop
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
    /** sets flex-direction property on mobile sized devices */
    flexDirectionMobile: PropTypes.oneOf(['column', 'column-reverse', 'row-reverse']),
    /** sets flex-direction property on tablet sized devices */
    flexDirectionTablet: PropTypes.oneOf(['column', 'column-reverse', 'row-reverse']),
    /** sets flex-direction property on desktop sized devices */
    flexDirectionDesktop: PropTypes.oneOf(['column', 'column-reverse', 'row-reverse']),
    column: PropTypes.bool
};

export default Row;
