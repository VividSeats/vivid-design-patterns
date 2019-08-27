import React, { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import BodyText from '../atoms/BodyText';
import Button from '../atoms/Button';
import Link from '../atoms/Link';
import SmallText from '../atoms/SmallText';
import DateColumn from '../atoms/DateColumn';
import Icon from '../atoms/Icon';

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
    hasCheckbox = false,
    minListPrice = 0,
    imageUrl,
    schemaDescription,
    ticketCount = 0,
    performerName,
    performerType,
    performerUrl,
    onChange = () => {},
    onClick = () => {},
    ...htmlAttributes
}) => {
    const { getColClassName, BASE_CLASSNAME, COL_CLASSNAMES, BUTTON_TEXT } = EventRow;
    const { BUTTON, DATE_RANGE, INFO, THUMBNAIL } = COL_CLASSNAMES;
    const { regionCode, countryCode, city, name: venueName } = venue;
    const countryCodeString = countryCode !== 'US' ? `, ${countryCode}` : '';

    const [checkboxState, setCheckboxState] = useState(false);

    return (
        <Link
            className={BASE_CLASSNAME}
            href={href}
            type="anchor"
            itemScope
            itemType="http://schema.org/Event"
            role="row"
            onClick={e => {
                onChange(!checkboxState);
                setCheckboxState(!checkboxState);
                onClick(e);
            }}
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
            {hasButton && !hasCheckbox && (
                <div className={getColClassName(BUTTON)}>
                    <Button>{!!dateRange ? BUTTON_TEXT.DATE_RANGE : BUTTON_TEXT.DATE}</Button>
                </div>
            )}
            {/* Checkbox */}
            {hasCheckbox && (
                <div className={getColClassName(BUTTON)}>
                    <Icon type={`checkbox-${checkboxState ? 'on' : 'off'}`} />
                </div>
            )}
            <link className="schema-url" itemProp="url" href={href} />
            <meta itemProp="sameAs" content={href} />
            {!!imageUrl && <meta itemProp="image" content={imageUrl} />}
            {!!schemaDescription && <meta itemProp="description" content={schemaDescription} />}
            <div itemProp="offers" itemScope itemType="http://schema.org/AggregateOffer">
                <link itemProp="url" href={href} />
                <meta itemProp="priceCurrency" content="USD" />
                {ticketCount > 0 ? (
                    <link itemProp="availability" href="http://schema.org/InStock" />
                ) : (
                    <link itemProp="availability" href="http://schema.org/SoldOut" />
                )}
                {!isTimeTbd && (
                    <React.Fragment>
                        <meta itemProp="validFrom" content={`${moment().format('YYYY-MM-DD')}`} />
                        <meta itemProp="validThrough" content={`${moment(date).format('YYYY-MM-DD')}`} />
                    </React.Fragment>
                )}
                {!!minListPrice && <meta itemProp="price" content={minListPrice} />}
            </div>
            {!!performerType && (
                <div itemProp="performer" itemScope itemType={`http://schema.org/${performerType}`}>
                    <meta itemProp="name" content={performerName} />
                    <meta itemProp="sameAs" content={performerUrl} />
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
    href: PropTypes.string,
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
    minListPrice: PropTypes.number,
    schemaDescription: PropTypes.string,
    ticketCount: PropTypes.number,
    performerName: PropTypes.string,
    performerType: PropTypes.string,
    performerUrl: PropTypes.string,
    hasButton: PropTypes.bool,
    hasCheckbox: PropTypes.bool,
    /** onChange is passed a boolean indicating the new checkbox state */
    onChange: PropTypes.func,
    onClick: PropTypes.func
};

export default EventRow;
