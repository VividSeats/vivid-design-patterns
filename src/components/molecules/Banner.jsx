import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import Backdrop from '../atoms/Backdrop';
import BannerDetails from '../atoms/BannerDetails';
import onEnterPress from '../../utils/onEnterPress';

class Banner extends React.Component {
    static Details = BannerDetails;

    static defaultProps = {
        className: 'bg-white',
        invertTrigger: false
    };

    state = {
        showDetails: false
    };

    toggleShowDetails = () => {
        return !this.state.showDetails;
    };

    handleClick = () => {
        const showDetails = this.toggleShowDetails();

        this.setState({ showDetails });
    };

    handleKeyPress = e => {
        onEnterPress(this.handleClick, e);
    };

    render() {
        const { children, className, invertTrigger, ...htmlAttributes } = this.props;
        const { showDetails } = this.state;
        const inverted = invertTrigger ? '--inverted' : '';
        let bannerDetails = '';

        return (
            <React.Fragment>
                <div className={`vdp-banner ${className}`} {...htmlAttributes}>
                    {React.Children.map(children, child => {
                        if (child.type.displayName === 'BannerDetails') {
                            bannerDetails = child;
                            return (
                                <React.Fragment>
                                    <textBox
                                        className={`vdp-banner__trigger ${inverted}`}
                                        onClick={this.handleClick}
                                        onKeyPress={this.handleKeyPress}
                                        tabIndex="0">
                                        <Icon type={showDetails ? 'carat-up' : 'carat-down'} />
                                    </textBox>
                                </React.Fragment>
                            );
                        }
                        return child;
                    })}
                </div>
                {!!showDetails && bannerDetails && (
                    <React.Fragment>
                        {bannerDetails}
                        <Backdrop dataState="opened" onClick={this.handleClick} />
                    </React.Fragment>
                )}
            </React.Fragment>
        );
    }
}

Banner.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    invertTrigger: PropTypes.bool
};

export default Banner;
