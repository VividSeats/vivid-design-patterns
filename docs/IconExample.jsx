import React from 'react';
import PropTypes from 'prop-types';
import BodyText from '../src/components/atoms/BodyText';
import Column from '../src/components/molecules/Column';
import Icon from '../src/components/atoms/Icon';

class IconExample extends React.Component {
    state = { showEntity: false };

    static propTypes = {
        entity: PropTypes.string,
        type: PropTypes.string
    };

    toggleMethod = () => {
        const { showEntity } = this.state;
        this.setState({ showEntity: !showEntity });
    };

    render() {
        const { showEntity } = this.state;
        const { entity, type } = this.props;

        return (
            <Column className={'--sm-6--md-2 icon-docs'}>
                <Icon type={type} size="lg" onClick={this.toggleMethod} />
                <BodyText importance={2} state={'muted'}>
                    {showEntity ? entity : type}
                </BodyText>
            </Column>
        );
    }
}

export default IconExample;
