import React from 'react';
import PropTypes from 'prop-types';
import BannerDetails from '../atoms/BannerDetails';

class Banner extends React.Component {
    static defaultProps = {
        className: 'bg-white'
    };

    static Details = BannerDetails;

    render() {
        const { children, className, ...htmlAttributes } = this.props;

        return (
            <div className={`vdp-banner ${className}`} {...htmlAttributes}>
                {children}
            </div>
        );
    }
}

Banner.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    invertTrigger: PropTypes.bool
};

export default Banner;
