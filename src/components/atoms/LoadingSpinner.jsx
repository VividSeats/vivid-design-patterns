import React from 'react';
import PropTypes from 'prop-types';

const LoadingSpinner = ({ size = 20, className = '' }) => (
    <div className={`vdp-loading-spinner__container ${className}`}>
        <svg className="vdp-loading-spinner" viewBox="25 25 50 50" style={{ zoom: size / 20 }}>
            <circle className="path" cx="50" cy="50" r="20" fill="none" strokeWidth={(20 / size) * 4} strokeLinecap="round" />
        </svg>
    </div>
);

LoadingSpinner.propTypes = {
    size: PropTypes.number,
    className: PropTypes.string
};

export default LoadingSpinner;
