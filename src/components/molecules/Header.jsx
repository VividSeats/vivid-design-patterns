import React from 'react';

const Header = ({ children }) => (
    <header className="vdp-site-header">
        <div className="vdp-container vdp-site-header__container">
            { children }
        </div>
    </header>
);

export default Header;
