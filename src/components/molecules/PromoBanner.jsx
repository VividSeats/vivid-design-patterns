import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../atoms/Icon';
import TinyText from '../atoms/TinyText';
import Subhead from '../atoms/Subhead';
import Row from './Row';
import SmallText from '../atoms/SmallText';
import Column from './Column';

class PromoBanner extends React.Component {
    state = {
        showDetails: false,
        caratType: 'carat-down'
    };

    changeCaratType = () => {
        return this.state.caratType === 'carat-down' ? 'carat-up' : 'carat-down';
    };

    toggleShowDetails = () => {
        return !this.state.showDetails;
    };

    handleClick = () => {
        const showDetails = this.toggleShowDetails();
        const caratType = this.changeCaratType();

        this.setState({ caratType: caratType, showDetails: showDetails });
    };

    render() {
        const { showDetails, caratType } = this.state;
        const { offerType, offerHeadline, offerSubheadline, offerDetails, legalText } = this.props;
        return (
            <React.Fragment className="vdp-promo-banner">
                <Row className="--centered">
                    <Subhead className="--gold">{offerType}</Subhead>
                    <Subhead>{offerHeadline}</Subhead>
                    <Subhead>{offerSubheadline}</Subhead>
                    <Icon type={caratType} onClick={this.handleClick} />
                </Row>

                {showDetails && (
                    <Column>
                        <SmallText>{offerDetails}</SmallText>
                        <TinyText>{legalText}</TinyText>
                    </Column>
                )}
            </React.Fragment>
        );
    }
}

PromoBanner.propTypes = {
    offerType: PropTypes.string,
    offerHeadline: PropTypes.string,
    offerSubheadline: PropTypes.string,
    offerDetails: PropTypes.string,
    legalText: PropTypes.string
};

export default PromoBanner;
