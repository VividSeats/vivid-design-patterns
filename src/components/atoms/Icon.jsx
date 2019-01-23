import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Icon = ({ children, className = '', type, ...htmlAttributes }) => (
    <i className={classNames('vp-icon material-icons', { [className]: !!className, [`icon-${type}`]: !!type })} {...htmlAttributes}>
        {type || children}
    </i>
);

Icon.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    type: PropTypes.string
};

export default Icon;
