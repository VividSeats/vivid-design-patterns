import React from 'react';
import PropTypes from 'prop-types';
import FabChild from '../atoms/FabChild';

/* eslint react/no-array-index-key: 0 */

const Fab = ({ children, className = '', visible = true, ...htmlAttributes }) => (
    <div className={`vp-fab ${className}`} data-state={visible ? 'visible' : 'hidden'} {...htmlAttributes}>
        {/* using toArray removes falsey values from children */}
        {React.Children.toArray(children).map((child, i) => {
            const { type } = child;
            if (!!type && type.displayName === 'FabChild') {
                return child;
            }

            // wrap child in sub-component if not already wrapped
            return <Fab.Child key={`${!!type ? type : 'FabChild'}-${i}`}>{child}</Fab.Child>;
        })}
    </div>
);

Fab.Child = FabChild;

Fab.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    visible: PropTypes.bool
};

export default Fab;
