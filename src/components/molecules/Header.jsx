import React from 'react';

const SiteHeader = ({ children }) => (
    <header className="vdp-site-header">
        <div className="vdp-container vdp-site-header__container">
            { children }
        </div>
    </header>
);

export default SiteHeader;
