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
    eventType = 'Event',
    venue,
    schemaDescription,
    ticketCount,
    performerType,
    performerName,
    performerUrl
}) => {
    return (
        <Card
            className="mt-md-m"
            type="anchor"
            role="link"
            onClick={() => {
                window.location.href = href;
            }}>
            <Card.Hero
                {...{
                    alt,
                    imageSrc,
                    style: { objectFit: 'cover' }
                }}>
                {minListPrice > 0 && (
                    <Badge>
                        from ${minListPrice} {isInternationalVenue ? 'USD' : ''}
                    </Badge>
                )}
            </Card.Hero>
            <EventRow
                {...{
                    href,
                    venue,
                    title,
                    subtitle,
                    date,
                    isTimeTbd,
                    imageUrl: imageSrc,
                    schemaDescription,
                    ticketCount,
                    performerType,
                    performerName,
                    performerUrl,
                    hasButton: false,
                    eventType,
                    showMinListPrice: false,
                    minListPrice,
                    truncate: true
                }}
            />
        </Card>
    );
};

EventCard.propTypes = {
    alt: PropTypes.string.isRequired,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
    href: PropTypes.string.isRequired,
    imageSrc: PropTypes.string.isRequired,
    isInternationalVenue: PropTypes.bool,
    isTimeTbd: PropTypes.bool,
    minListPrice: PropTypes.number,
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    eventType: PropTypes.string,
    venue: PropTypes.shape({
        name: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        regionCode: PropTypes.string.isRequired,
        countryCode: PropTypes.string
    }),
    schemaDescription: PropTypes.string,
    ticketCount: PropTypes.number,
    performerName: PropTypes.string,
    performerType: PropTypes.string,
    performerUrl: PropTypes.string
};

export default EventCard;
