import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';

const CardHero = ({ className = '', loadImageViaCss = false, imageSrc, alt, children, ...htmlAttributes }) => {
    if (loadImageViaCss) {
        return (
            <div
                className={`vdp-card__hero ${className}`}
                style={{ backgroundImage: `url('${imageSrc}')` }}
                {...htmlAttributes}
                role="img"
                aria-label={alt}
            />
        );
    }

    return (
        <div className={`vdp-card__hero ${className}`}>
            {/* height same as $card-hero-height */}
            <LazyLoad height="128px">
                <img className="vdp-card__hero__image" src={imageSrc} {...htmlAttributes} alt={alt} />
            </LazyLoad>
            {children}
        </div>
    );
};

CardHero.propTypes = {
    /** Alt text for hero image */
    alt: PropTypes.string.isRequired,
    className: PropTypes.string,
    /** Hero image url */
    imageSrc: PropTypes.string.isRequired,
    /** Defines whether the hero image is loaded  via an image tag or a backgroundImage style property via css */
    loadImageViaCss: PropTypes.bool,
    children: PropTypes.node
};

export default CardHero;
