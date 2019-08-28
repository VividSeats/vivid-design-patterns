import React from 'react';
import PropTypes from 'prop-types';

function BannerDetails({ children }) {
    return (
        <div className="vdp-banner__details">
            <div className="vdp-container--article">{children}</div>
        </div>
    );
}

BannerDetails.displayName = 'BannerDetails';

BannerDetails.propTypes = {
    children: PropTypes.node
};

export default BannerDetails;
