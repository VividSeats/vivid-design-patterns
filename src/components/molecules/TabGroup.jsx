import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TabGroup = ({ children, compressed, dark, className = '', type = 'group', ...attributes }) => {
    TabGroup.propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        dark: PropTypes.bool,
        compressed: PropTypes.bool
    };

    const tabGroupClassnames = classNames(`vdp-tab-${type}`, {
        [className]: !!className,
        '--inverted': dark,
        '--compressed': compressed
    });

    return <ul {...{ className: tabGroupClassnames, ...attributes }}>{children}</ul>;
};

TabGroup.propTypes = {
    children: PropTypes.node,
    compressed: PropTypes.bool,
    dark: PropTypes.bool,
    type: PropTypes.oneOf(['group', 'bar'])
};

export default TabGroup;
