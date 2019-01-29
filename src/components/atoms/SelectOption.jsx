import React from 'react';
import PropTypes from 'prop-types';

function SelectOption({ children, ...attributes }) {
    return <option {...attributes}>{children}</option>;
}

SelectOption.propTypes = {
    children: PropTypes.node
};

export default SelectOption;
