import React from 'react';
import PropTypes from 'prop-types';
import BodyText from '../src/components/atoms/BodyText';
import Column from '../src/components/molecules/Column';
import Icon from '../src/components/atoms/Icon';

class IconExample extends React.Component {
    state = { showEntity: false };

    static defaultProps = {
        onCopy: () => {}
    };

    static propTypes = {
        entity: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        onCopy: PropTypes.func
    };

    toggleMethod = () => {
        const { showEntity } = this.state;
        this.setState({ showEntity: !showEntity });
    };

    copyToClipboard = str => {
        let value = str;
        if (!this.state.showEntity) {
            value = `<Icon type="${str}"/>`;
        }
        const el = document.createElement('textarea');
        el.value = value;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
        this.props.onCopy(value);
    };

    render() {
        const { showEntity } = this.state;
        const { entity, type } = this.props;
        const text = showEntity ? entity : type;
        return (
            <Column className={'--sm-6--md-2 icon-docs'}>
                <Icon type={type} size="lg" onClick={() => this.copyToClipboard(text)} />
                <BodyText importance={2} state={'muted'} onClick={this.toggleMethod} style={{ cursor: 'pointer' }}>
                    {text}
                </BodyText>
            </Column>
        );
    }
}

export default IconExample;
