import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TabGroup = ({ children, centered, compressed, dark, className = '', type = 'group', ...attributes }) => {
    TabGroup.propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        centered: PropTypes.bool,
        dark: PropTypes.bool,
        compressed: PropTypes.bool
    };

    const tabGroupClassnames = classNames(`vdp-tab-${type}`, {
        [className]: !!className,
        '--centered': centered,
        '--inverted': dark,
        '--compressed': compressed
    });

    return <ul {...{ className: tabGroupClassnames, ...attributes }}>{children}</ul>;
};

TabGroup.propTypes = {
    children: PropTypes.node,
    centered: PropTypes.bool,
    compressed: PropTypes.bool,
    dark: PropTypes.bool,
    type: PropTypes.oneOf(['group', 'bar'])
};

export default TabGroup;
