import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../atoms/Icon';

const Trigger = ({ className = '', dark, icon, onClick = () => {}, position, ...htmlAttributes }) => {
    const triggerClassNames = classNames('vdp-trigger', {
        [`--dark`]: dark,
        [`--${position}`]: position,
        [`${className}`]: className
    }).replace(/ -/g, '-');

    return (
        <button className={triggerClassNames} onClick={onClick} {...htmlAttributes}>
            <Icon type={icon} />
        </button>
    );
};

Trigger.propTypes = {
    className: PropTypes.string,
    dark: PropTypes.bool,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    position: PropTypes.oneOf(['bl', 'br', 'tl', 'tr'])
};

export default Trigger;
