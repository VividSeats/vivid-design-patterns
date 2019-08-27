import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

const DrawerBody = ({ children, className = '', compressed = false, ...htmlProps }) => {
    const drawerBodyClassNames = classNames('vdp-drawer__body', {
        '--compressed': compressed,
        [className]: className
    });

    return (
        <div className={drawerBodyClassNames} {...htmlProps}>
            {children}
        </div>
    );
};

DrawerBody.propTypes = {
    children: PropTypes.node,
    compressed: PropTypes.bool,
    className: PropTypes.string
};

export default DrawerBody;
