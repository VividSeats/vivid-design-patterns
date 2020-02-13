import React from 'react';
import PropTypes from 'prop-types';

const Image = ({ fallback = '', src, alt, loadImageViaCss = false, ...htmlAttributes }) => {
    if (loadImageViaCss) {
        return <CssImage src={src} alt={alt} fallback={fallback} {...htmlAttributes} />;
    }

    return <ImageElement src={src} alt={alt} fallback={fallback} {...htmlAttributes} />;
};

const ImageElement = ({ src: srcFromProps, alt, fallback, ...htmlAttributes }) => {
    const [src, setSrc] = React.useState(null);
    /* We need to set the src via useEffect in order for SSR to work. Otherwise the race condition between the onError callback
    and hydration will cause onError/onLoad methods to not be called. This means the image will not be rendered until hydration. */
    React.useEffect(() => {
        setSrc(srcFromProps);
    }, []);

    const onError = e => {
        setSrc(fallback);
        if (!!htmlAttributes.onError) {
            htmlAttributes.onError(e);
        }
    };

    return !!src ? <img {...htmlAttributes} onError={onError} alt={alt} src={src} /> : null;
};

const CssImage = ({ src: srcFromProps, alt, fallback, height, width, ...htmlAttributes }) => {
    const [src, setSrc] = React.useState(null);
    const [hasFetchedImage, setHasFetchedImage] = React.useState(false);
    const [hasError, setHasError] = React.useState(false);

    /* We need to set the src via useEffect in order for SSR to work. Otherwise the race condition between the onError callback
     and hydration will cause onError/onLoad methods to not be called. This means the image will not be rendered until hydration. */
    React.useEffect(() => {
        setSrc(srcFromProps);
    }, []);

    const onLoad = args => {
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
        height
    };

    if (!src) {
        return null;
    }

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
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
    fallback: PropTypes.string,
    loadImageViaCss: PropTypes.bool
};

CssImage.propTypes = {
    ...Image.propTypes,
    width: PropTypes.string,
    height: PropTypes.string
};

export default Image;
