import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TabGroup = ({ children, dark, className, ...attributes }) => {
    TabGroup.propTypes = {
        children: PropTypes.node,
        className: PropTypes.string
    };

    const tabGroupClassnames = classNames('vp-tab-group', {
        [className]: !!className,
        [`--inverted`]: !!dark
    });

    return <nav {...{ className: tabGroupClassnames, ...attributes }}>{children}</nav>;
};

export default TabGroup;
