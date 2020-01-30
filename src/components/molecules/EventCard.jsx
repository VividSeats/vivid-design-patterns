import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import EventRow from './EventRow';
import Badge from '../atoms/Badge';

const EventCard = ({
    alt,
    date,
    href,
    imageSrc,
    isInternationalVenue = false,
    isTimeTbd,
    minListPrice = 0,
    subtitle,
    title,
    eventType,
    venue,
    schemaDescription,
    ticketCount,
    performer,
    ...htmlAttributes
}) => (
    <a className="vdp-event-card" href={href} {...htmlAttributes}>
        <Card className="vdp-card--anchor">
            <Card.Hero
                {...{
                    alt,
                    imageSrc,
                    loadImageViaCss: true
                }}>
                {minListPrice > 0 && (
                    <Badge type="angled">
                        from ${minListPrice} {isInternationalVenue ? 'USD' : ''}
                    </Badge>
                )}
            </Card.Hero>
            <EventRow
                {...{
                    date,
                    isTimeTbd,
                    title,
                    subtitle,
                    hasButton: false,
                    eventType,
                    venue,
                    imageUrl: imageSrc,
                    schemaDescription,
                    ticketCount,
                    performerType: performer.performerType,
                    performerName: performer.performerName,
                    performerUrl: performer.performerUrl
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
    title: PropTypes.string.isRequired,
    eventType: PropTypes.string.isRequired,
    venue: PropTypes.shape({
        name: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        regionCode: PropTypes.string.isRequired,
        countryCode: PropTypes.string
    }),
    schemaDescription: PropTypes.string,
    ticketCount: PropTypes.number,
    performer: PropTypes.shape({
        performerName: PropTypes.string,
        performerType: PropTypes.string,
        performerUrl: PropTypes.string
    })
};

export default EventCard;
