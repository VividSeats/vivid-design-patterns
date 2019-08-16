import React from 'react';
import PropTypes from 'prop-types';
import TinyText from '../atoms/TinyText';
import Subhead from '../atoms/Subhead';
import Row from './Row';
import SmallText from '../atoms/SmallText';
import Column from './Column';

class PromoBanner extends React.Component {
    state = {
        showDetails: false,
        caratType: 'carat'
    };

    changeCaratType = () => {
        return this.state.caratType === 'carat' ? 'carat--rotated' : 'carat';
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
            <div className="vdp-promo-banner">
                <Row className="bg-slate">
                    <Subhead className="vdp-type-subhead--gold">{offerType}</Subhead>
                    <Subhead className="vdp-type-subhead--inverted">{offerHeadline}</Subhead>
                    <Subhead className="vdp-type-subhead--inverted">{offerSubheadline}</Subhead>
                    <div className={caratType} onClick={this.handleClick} />
                </Row>

                {showDetails && (
                    <div>
                        <Column>
                            <SmallText>{offerDetails}</SmallText>
                        </Column>
                        <Column>
                            <TinyText opaque>{legalText}</TinyText>
                        </Column>
                    </div>
                )}
            </div>
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
