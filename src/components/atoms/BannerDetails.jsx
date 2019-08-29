import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

function BannerDetails({ children, invertedTrigger }) {
    const [showDetails, setShowDetails] = React.useState(false);

    const handleClick = () => {
        setShowDetails(prevShowDetails => !prevShowDetails);
    };

    const inverted = invertedTrigger ? '--inverted' : '';

    return (
        <React.Fragment>
            <button className={`vdp-banner__trigger ${inverted}`} onClick={handleClick}>
                <Icon type={showDetails ? 'carat-up' : 'carat-down'} />
            </button>
            {showDetails && (
                <div className="vdp-banner__details">
                    <div className="vdp-container--article">{children}</div>
                </div>
            )}
        </React.Fragment>
    );
}

BannerDetails.displayName = 'BannerDetails';

BannerDetails.propTypes = {
    children: PropTypes.node,
    invertedTrigger: PropTypes.bool
};
BannerDetails.defaultProps = {
    invertedTrigger: false
};

export default BannerDetails;
