import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import Backdrop from '../atoms/Backdrop';
import BannerDetails from '../atoms/BannerDetails';

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

        this.setState({ showDetails: showDetails });
    };

    render() {
        const { children, className, invertTrigger, ...htmlAttributes } = this.props;
        const { showDetails } = this.state;

        return (
            <React.Fragment>
                <div className={'vdp-banner ' + className} {...htmlAttributes}>
                    {React.Children.map(children, child => {
                        if (child.type.displayName === 'BannerDetails') {
                            return (
                                <React.Fragment>
                                    <span
                                        className={'vdp-banner__trigger' + (invertTrigger ? '--inverted' : '')}
                                        onClick={this.handleClick}>
                                        <Icon type={showDetails ? 'carat-up' : 'carat-down'} />
                                    </span>
                                    {showDetails && child}
                                </React.Fragment>
                            );
                        }
                        return child;
                    })}
                </div>
                {showDetails && <Backdrop dataState={'opened'} onClick={this.handleClick} />}
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
