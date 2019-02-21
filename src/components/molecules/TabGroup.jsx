import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TabGroup = ({ children, compressed, dark, className, ...attributes }) => {
    TabGroup.propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        dark: PropTypes.bool,
        compressed: PropTypes.bool
    };

    const tabGroupClassnames = classNames('vdp-tab-group', {
        [className]: !!className,
        '--inverted': dark,
        '--compressed': compressed
    });

    return <ul {...{ className: tabGroupClassnames, ...attributes }}>{children}</ul>;
};

export default TabGroup;
