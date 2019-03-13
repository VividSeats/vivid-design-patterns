import React from 'react';
import PropTypes from 'prop-types';

const FilterGroupItem = ({ children, className = '', ...htmlAttributes }) => (
    <li className={`vdp-filter-group__item ${className}`} {...htmlAttributes}>
        {children}
    </li>
);

FilterGroupItem.displayName = 'FilterGroupItem';

FilterGroupItem.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default FilterGroupItem;
