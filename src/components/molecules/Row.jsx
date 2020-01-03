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
    flexWrap,
    flexWrapDesktop,
    flexWrapMobile,
    flexWrapTablet,
    ...htmlAttributes
}) => {
    const rowClassNames = classNames('vdp-row', {
        [className]: className,
        [`--justify-${justify}`]: justify,
        [`--align-${align}`]: align,
        '--column': column,
        [getFlexDirectionClass(flexDirectionMobile, 'mobile')]: flexDirectionMobile,
        [getFlexDirectionClass(flexDirectionTablet, 'tablet')]: flexDirectionTablet,
        [getFlexDirectionClass(flexDirectionDesktop, 'desktop')]: flexDirectionDesktop,
        [`--${flexWrap}-all`]: flexWrap,
        [`--${flexWrapMobile}-mobile`]: flexWrapMobile,
        [`--${flexWrapTablet}-tablet`]: flexWrapTablet,
        [`--${flexWrapDesktop}-desktop`]: flexWrapDesktop
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
    /** sets flex-wrap */
    flexWrap: PropTypes.oneOf(['nowrap']),
    /** sets flex-wrap for mobile devices */
    flexWrapMobile: PropTypes.oneOf(['nowrap']),
    /** sets flex-wrap for tablets */
    flexWrapTablet: PropTypes.oneOf(['nowrap']),
    /** sets flex-wrap for desktop */
    flexWrapDesktop: PropTypes.oneOf(['nowrap']),
    column: PropTypes.bool
};

export default Row;
