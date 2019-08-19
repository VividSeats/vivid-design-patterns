import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ children }) => (
    <header className="vdp-site-header">
        <div className="vdp-container vdp-site-header__container">{children}</div>
    </header>
);

Header.propTypes = {
    children: PropTypes.node.isRequired
};

export default Header;
