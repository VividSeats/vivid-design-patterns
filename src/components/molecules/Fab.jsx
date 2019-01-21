import React from 'react';
import PropTypes from 'prop-types';
import FabChild from '../atoms/FabChild';

const Fab = ({ children, className = '', dataState = 'visible', ...htmlAttributes }) => (
    <div className={`vp-fab ${className}`} {...htmlAttributes} data-state={dataState}>
        {React.Children.toArray(children).map(child => {
            const { type } = child;
            if (!type || type.displayName === 'FabChild') {
                return child;
            }

            // wrap child in sub-component if not already wrapped
            return (
                <Fab.Child key={`${!!type ? type : 'FabChild'}-${new Date().getTime()}`} {...htmlAttributes}>
                    {child}
                </Fab.Child>
            );
        })}
    </div>
);

Fab.Child = FabChild;

Fab.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataState: PropTypes.oneOf(['visible', 'hidden'])
};

export default Fab;
