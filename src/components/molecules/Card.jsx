import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CardBody from '../atoms/CardBody';
import CardFooter from '../atoms/CardFooter';
import CardHeader from '../atoms/CardHeader';
import CardHero from '../atoms/CardHero';
import onEnterPress from '../../utils/onEnterPress';

/* eslint react/no-array-index-key: 0 */

class Card extends React.Component {
    static propTypes = {
        /** html attribute role must be provided if Card is of type anchor. Role prop should be of type string */
        role: props => {
            if (props.type === 'anchor' && !props.role) {
                return new Error('Card components with type anchor must contain role attribute to provide accessibility');
            }
        },
        type: PropTypes.oneOf(['standard', 'list', 'anchor']),
        className: PropTypes.string,
        /** this method is also called upon when users presses the enter key on the card element */
        onClick: PropTypes.func,
        children: PropTypes.node.isRequired
    };

    static defaultProps = {
        className: '',
        onClick: () => {}
    };

    onKeyPress = e => {
        const { onClick } = this.props;
        onEnterPress(onClick, e);
    };

    static Footer = CardFooter;

    static Header = CardHeader;

    static Body = CardBody;

    static Hero = CardHero;

    render() {
        const { className, type, children, onClick, role, ...htmlAttributes } = this.props;

        const cardClassNames = classNames({
            [`vdp-card--${type}`]: type,
            'vdp-card': type !== 'anchor' && type !== 'list',
            [className]: className
        });

        return (
            <div className={cardClassNames} role={role} onClick={onClick} onKeyPress={this.onKeyPress} {...htmlAttributes}>
                {React.Children.toArray(children).map((child, i) => {
                    if (typeof child.type === 'function') {
                        return child;
                    }

                    return <Card.Body key={i}>{child}</Card.Body>;
                })}
            </div>
        );
    }
}

export default Card;
