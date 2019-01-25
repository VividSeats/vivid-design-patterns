import React from 'react';
import PropTypes from 'prop-types';
import FabChild from '../atoms/FabChild';

const Fab = ({ children, className = '', dataState = Fab.DATA_STATE.VISIBLE, ...htmlAttributes }) => (
    <div className={`vp-fab ${className}`} data-state={dataState} {...htmlAttributes}>
        {React.Children.map(children, (child, i) => {
            const { type } = child;
            if (!!type && type.displayName === 'FabChild') {
                return child;
            }

            // wrap child in sub-component if not already wrapped
            return <Fab.Child key={`${!!type ? type : 'FabChild'}-${i}`}>{child}</Fab.Child>;
        })}
    </div>
);

Fab.DATA_STATE = {
    VISIBLE: 'visible',
    HIDDEN: 'hidden'
};

Fab.Child = FabChild;

Fab.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    dataState: PropTypes.oneOf([Fab.DATA_STATE.VISIBLE, Fab.DATA_STATE.HIDDEN])
};

export default Fab;
