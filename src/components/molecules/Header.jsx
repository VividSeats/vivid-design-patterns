import React from 'react';
import PropTypes from 'prop-types';

export const HeaderContext = React.createContext();

const Header = ({ children, inputRef }) => {
    return (
        <HeaderContext.Provider value={inputRef}>
            <header className="vdp-site-header">
                <div className="vdp-container vdp-site-header__container">{children}</div>
            </header>
        </HeaderContext.Provider>
    );
};

Header.propTypes = {
    children: PropTypes.node.isRequired,
    inputRef: PropTypes.shape(PropTypes.any)
};

export default Header;
