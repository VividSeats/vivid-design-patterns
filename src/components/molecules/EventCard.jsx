import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import EventRow from './EventRow';
import Badge from '../atoms/Badge';

const EventCard = ({
    alt,
    date,
    href = '',
    imageSrc = '',
    isInternationalVenue = false,
    isTimeTbd,
    minListPrice,
    subtitle = '',
    title = ''
}) => (
    <a href={href}>
        <Card>
            <Card.Hero
                {...{
                    alt,
                    imageSrc,
                    loadImageViaCss: true
                }}>
                <Badge type="angled">
                    from ${minListPrice} {isInternationalVenue ? 'USD' : ''}
                </Badge>
            </Card.Hero>
            <EventRow
                {...{
                    date,
                    isTimeTbd,
                    title,
                    subtitle,
                    hasButton: false
                }}
            />
        </Card>
    </a>
);

EventCard.propTypes = {
    alt: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
    href: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    isInternationalVenue: PropTypes.bool,
    isTimeTbd: PropTypes.bool,
    minListPrice: PropTypes.number.isRequired,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
};

export default EventCard;
