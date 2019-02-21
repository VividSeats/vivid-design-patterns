import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Tab = ({ children, className, active, onClick = () => {}, onMouseEnter = () => {}, onMouseLeave = () => {}, ...attributes }) => {
    Tab.propTypes = {
        children: PropTypes.node,
        className: PropTypes.string,
        active: PropTypes.bool,
        onClick: PropTypes.func,
        onMouseEnter: PropTypes.func,
        onMouseLeave: PropTypes.func
    };

    const props = {
        onClick,
        onMouseEnter,
        onMouseLeave,
        className: classNames('vdp-tab', {
            [className]: !!className
        }),
        'data-state': active ? 'active' : null,
        ...attributes
    };

    return <li {...props}>{children}</li>;
};

export default Tab;
