import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

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
    minListPrice = 0,
    imageUrl,
    schemaDescription,
    ticketCount = 0,
    performerName,
    performerType,
    performerUrl,
    ...htmlAttributes
}) => {
    const { getColClassName, BASE_CLASSNAME, COL_CLASSNAMES, BUTTON_TEXT } = EventRow;
    const { BUTTON, DATE_RANGE, INFO, THUMBNAIL } = COL_CLASSNAMES;
    const { regionCode, countryCode, city, name: venueName } = venue;
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
                            <span itemProp="addressLocality">{city}</span>
                            {!!regionCode && (
                                <React.Fragment>
                                    , <span itemProp="addressRegion">{regionCode}</span>
                                </React.Fragment>
                            )}
                            {countryCodeString}
                        </span>
                    </SmallText>
                ) : (
                    <SmallText state="muted">{subtitle}</SmallText>
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
            <link class="schema-url" itemProp="url" href={href} />
            {!!imageUrl && <meta itemprop="image" content={imageUrl} />}
            {!!schemaDescription && <meta itemprop="description" content={schemaDescription} />}
            <div itemprop="offers" itemscope="" itemtype="http://schema.org/AggregateOffer">
                <link itemprop="url" href={href} />
                <meta itemprop="priceCurrency" content="USD" />
                {ticketCount > 0 ? (
                    <link itemprop="availability" href="http://schema.org/InStock" />
                ) : (
                    <link itemprop="availability" href="http://schema.org/SoldOut" />
                )}
                {!isTimeTbd && (
                    <React.Fragment>
                        <meta itemprop="validFrom" content={`${moment().format('YYYY-MM-DD')}`} />
                        <meta itemprop="validThrough" content={`${moment(date).format('YYYY-MM-DD')}`} />
                    </React.Fragment>
                )}
                {!!minListPrice && <meta itemprop="price" content={minListPrice} />}
            </div>
            <div itemprop="performer" itemscope="" itemtype={`http://schema.org/${performerType}`}>
                <meta itemprop="name" content={performerName} />
                <meta itemprop="sameAs" content={performerUrl} />
            </div>
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
    imageUrl: PropTypes.string,
    schemaDescription: PropTypes.string,
    ticketCount: PropTypes.number,
    performerName: PropTypes.string,
    performerType: PropTypes.string,
    performerUrl: PropTypes.string,
    hasButton: PropTypes.bool
};

export default EventRow;
