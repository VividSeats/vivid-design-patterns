import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DrawerHeader from '../atoms/DrawerHeader';
import DrawerBody from '../atoms/DrawerBody';
import DrawerFooter from '../atoms/DrawerFooter';

const Drawer = ({ children, className, small, visible, position, ...htmlProps }) => {
    const drawerClassNames = classNames('vdp-drawer', {
        '--small': small,
        [className]: className
    });

    return (
        <div className={drawerClassNames} data-position={position} data-state={visible ? 'visible' : ''} {...htmlProps}>
            {children}
        </div>
    );
};

Drawer.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    small: PropTypes.bool,
    visible: PropTypes.bool,
    position: PropTypes.oneOf(['0', '1', '2']).isRequired
};

Drawer.defaultProps = {
    className: '',
    small: false,
    visible: false
};

Drawer.Header = DrawerHeader;
Drawer.Body = DrawerBody;
Drawer.Footer = DrawerFooter;

export default Drawer;
