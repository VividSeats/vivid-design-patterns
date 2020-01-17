import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ fallback = '', src, alt, loadImageViaCss = false, ...htmlAttributes }) => {
    if (loadImageViaCss) {
        return <CssImage src={src} alt={alt} fallback={fallback} {...htmlAttributes} />;
    } else {
        return <ImageElement src={src} alt={alt} fallback={fallback} {...htmlAttributes} />;
    }
};

const ImageElement = ({ src, alt, fallback, ...htmlAttributes }) => {
    const [hasImage, setHasImage] = React.useState(true);
    const onError = e => {
        setHasImage(false);
        if (!!htmlAttributes.onError) {
            htmlAttributes.onError(e);
        }
    };
    return <img {...htmlAttributes} onError={onError} alt={alt} src={hasImage ? src : fallback} />;
};

const CssImage = ({ src, alt, fallback, height, width, ...htmlAttributes }) => {
    const [hasFetchedImage, setHasFetchedImage] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);

    const onLoad = args => {
        console.log('image on load');
        setHasFetchedImage(true);
        if (htmlAttributes.onLoad) {
            htmlAttributes.onLoad(args);
        }
    };

    const onError = e => {
        setHasError(true);
        setHasFetchedImage(true);
        if (htmlAttributes.onError) {
            htmlAttributes.onError(e);
        }
    };

    const style = {
        backgroundImage: `url(${hasError ? fallback : src})`,
        width,
        height,
        backgroundSize: 'contain',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat'
    };

    return hasFetchedImage ? (
        <div style={style} {...htmlAttributes} />
    ) : (
        <img alt={alt} src={src} style={{ display: 'none' }} onLoad={onLoad} onError={onError} />
    );
};

Image.propTypes = {
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    fallback: PropTypes.string,
    loadImageViaCss: PropTypes.bool
};

ImageElement.propTypes = {
    ...Image.propTypes
};

CssImage.propTypes = {
    ...Image.propTypes,
    width: PropTypes.string,
    height: PropTypes.string
};

export default Image;
