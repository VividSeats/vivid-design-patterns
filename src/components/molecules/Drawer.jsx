import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Drawer = ({children, className, small, visible, position, ...htmlProps }) => {
    const drawerClassNames = classNames('vdp-drawer', {
        '--small': small,
        [className]: className
    });

    return (
        <div className={drawerClassNames} data-position={position} data-state={visible ? 'visible' : ''} {...htmlProps}>
            { children }
        </div>
    )
};

Drawer.propTypes = {
    children: PropTypes.node.isRequired,
    classNames: PropTypes.string,
    small: PropTypes.bool,
    visible: PropTypes.bool,
    position: PropTypes.oneOf(['0', '1', '2']).isRequired
};

Drawer.defaultProps = {
    classNames: '',
    small: false,
    visible: false
};

Drawer.Header = ({children, className = '', ...htmlProps }) => {
    return (
        <div className={`vdp-drawer__header ${className}`} {...htmlProps}>
            { children }
        </div>
    )
};

Drawer.Body = ({children, className = '', compressed, ...htmlProps }) => {
    const drawerBodyClassNames = classNames('vdp-drawer__body', {
        '--compressed': compressed,
        [className]: className
    });

    return (
        <div className={drawerBodyClassNames} {...htmlProps}>
            { children }
        </div>
    )
};

Drawer.Footer = ({children, className = '', ...htmlProps }) => {
    return (
        <div className={`vdp-drawer__footer ${className}`} {...htmlProps}>
            { children }
        </div>
    )
};

export default Drawer;








