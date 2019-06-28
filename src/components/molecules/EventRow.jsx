import React from 'react';
import PropTypes from 'prop-types';

import BodyText from '../atoms/BodyText';
import Button from '../atoms/Button';
import Link from '../atoms/Link';
import SmallText from '../atoms/SmallText';
import DateColumn from '../atoms/DateColumn';

const EventRow = ({
    href,
    subtitle,
    title,
    venue = {},
    date = null,
    dateRange = null,
    thumbnail = null,
    isTimeTbd = false,
    hasButton = true,
    ...htmlAttributes
}) => {
    const { getColClassName, BASE_CLASSNAME, COL_CLASSNAMES, BUTTON_TEXT } = EventRow;
    const { BUTTON, DATE_RANGE, INFO, THUMBNAIL } = COL_CLASSNAMES;
    const { regionCode, countryCode, city, name: venueName } = venue;
    const regionCodeString = regionCode ? `, ${regionCode}` : '';
    const countryCodeString = countryCode !== 'US' ? `, ${countryCode}` : '';

    return (
        <Link
            className={BASE_CLASSNAME}
            href={href}
            type="anchor"
            itemScope
            itemType="http://schema.org/Event"
            role="row"
            {...htmlAttributes}>
            {/* Thumbnail Image */}
            {!!thumbnail && !!thumbnail.src && !!thumbnail.alt && (
                <div className={getColClassName(THUMBNAIL)}>
                    <img src={thumbnail.src} alt={thumbnail.alt} />
                </div>
            )}
            {/* Date */}
            <DateColumn date={date} isTimeTbd={isTimeTbd} />
            {/* Event Info */}
            <div className={getColClassName(INFO)}>
                <BodyText height="compressed" weight="black" importance={2} itemProp="name">
                    {title}
                </BodyText>
                {!!Object.keys(venue).length ? (
                    <SmallText state="muted" itemProp="location" itemScope itemType="http://schema.org/Place">
                        <span itemProp="name">{venueName}</span>&nbsp;–&nbsp;
                        <span itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                            {`${city}${regionCodeString}${countryCodeString}`}
                        </span>
                    </SmallText>
                ) : (
                    <SmallText state="muted">subtitle</SmallText>
                )}
            </div>
            {/* Date Range */}
            {!!dateRange && (
                <div className={getColClassName(DATE_RANGE)}>
                    <SmallText alignment="right" state="muted">
                        {dateRange}
                    </SmallText>
                </div>
            )}
            {/* Button */}
            {hasButton && (
                <div className={getColClassName(BUTTON)}>
                    <Button>{!!dateRange ? BUTTON_TEXT.DATE_RANGE : BUTTON_TEXT.DATE}</Button>
                </div>
            )}
        </Link>
    );
};

EventRow.BASE_CLASSNAME = 'vdp-event-row';
EventRow.getColClassName = colType => `${EventRow.BASE_CLASSNAME}__col--${colType}`;

EventRow.COL_CLASSNAMES = {
    BUTTON: 'button',
    DATE_RANGE: 'date-range',
    INFO: 'info',
    THUMBNAIL: 'thumbnail'
};

EventRow.BUTTON_TEXT = {
    DATE: 'Tickets',
    DATE_RANGE: 'View Event'
};

EventRow.propTypes = {
    href: PropTypes.string.isRequired,
    venue: PropTypes.shape({
        name: PropTypes.string.isRequired,
        city: PropTypes.string.isRequired,
        regionCode: PropTypes.string.isRequired,
        countryCode: PropTypes.string
    }),
    title: PropTypes.node.isRequired,
    subtitle: PropTypes.node,
    dateRange: PropTypes.string,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
    thumbnail: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }),
    isTimeTbd: PropTypes.bool,
    hasButton: PropTypes.bool
};

export default EventRow;
