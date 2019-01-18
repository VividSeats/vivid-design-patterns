import React from 'react';
import PropTypes from 'prop-types';

const Fab = ({
    children,
    ...htmlAttributes
}) => (
    <div className='vp-fab' { ...htmlAttributes } >
        { children }
    </div>
);

Fab.propTypes = {
    children: PropTypes.node.isRequired
};

export default Fab;
