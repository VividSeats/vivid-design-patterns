import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Image from '../atoms/Image';
import BodyText from '../atoms/BodyText';
import Button from '../atoms/Button';
import Link from '../atoms/Link';
import SmallText from '../atoms/SmallText';
import DateColumn from '../atoms/DateColumn';
import Icon from '../atoms/Icon';

/* es-lint click-events-have-key-events: 0 */

const MinListPriceButton = ({ minListPrice = 0, isInternationalVenue }) => (
    <Button className={`price-length-${minListPrice.toString().length}`}>
        <i>from</i>&nbsp;
        <strong>
            ${minListPrice}
            {!!isInternationalVenue && ' USD'}
        </strong>
    </Button>
);

MinListPriceButton.propTypes = {
    minListPrice: PropTypes.number,
    isInternationalVenue: PropTypes.bool
};

const MobileMinListCol = ({ minListPrice = 0, isInternationalVenue }) => (
    <div className="vdp-event-row__col--mobile-min-price">
        <SmallText>
            <i>from</i>
        </SmallText>
        <BodyText height="compressed" className="lead-price" importance={2}>
            ${minListPrice}
            {!!isInternationalVenue && <p className="usd">USD</p>}
        </BodyText>
    </div>
);

MobileMinListCol.propTypes = {
    minListPrice: PropTypes.number,
    isInternationalVenue: PropTypes.bool
};

const eventUtmTracking = url => {
    const QUESTION_MARK = '?';
    const utmParams = 'utm_medium=organic&utm_source=google_eventsearch';
    if (url.indexOf(QUESTION_MARK) === -1) {
        return QUESTION_MARK + utmParams;
    }

    if (url.substr(-1) === QUESTION_MARK) {
        return utmParams;
    }

    return `&${utmParams}`;
};

const getThumbnailDate = date => {
    const momentDate = moment(date);
    const thumbnailDate = `${momentDate.format('ddd')}, ${momentDate.format('MMM DD')}`;

    if (momentDate.isSame(new Date(), 'year')) {
        return `${thumbnailDate} ${momentDate.format('h:mm A')}`;
    }

    return `${thumbnailDate}, ${momentDate.format('YYYY')} ${momentDate.format('h:mm A')}`;
};

const EventRow = ({
    href = '',
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
    showMinListPrice = true,
    onChange = () => {},
    onClick = () => {},
    isInternationalVenue = false,
    eventType = 'Event',
    truncate = false,
    ...htmlAttributes
}) => {
    const { getColClassName, BASE_CLASSNAME, COL_CLASSNAMES, BUTTON_TEXT } = EventRow;
    const { BUTTON, DATE_RANGE, INFO, THUMBNAIL, CHECKBOX } = COL_CLASSNAMES;
    const { regionCode, countryCode, city, name: venueName } = venue;
    const countryCodeString = countryCode !== 'US' ? `, ${countryCode}` : '';
    const hasThumbnail = !!thumbnail && !!thumbnail.src && !!thumbnail.alt;
    const thumbnailDate = getThumbnailDate(date);

    const [checkboxState, setCheckboxState] = useState(false);
    const hrefWithUtmTracking = href + eventUtmTracking(href);

    const getEventRowContent = () => (
        <Fragment>
            {/* Checkbox */}
            {hasCheckbox && (
                <div className={getColClassName(CHECKBOX)}>
                    <Icon type={`checkbox-${checkboxState ? 'on' : 'off'}`} />
                </div>
            )}
            {/* Thumbnail Image */}
            {hasThumbnail && (
                <Image
                    loadImageViaCss
                    className={getColClassName(THUMBNAIL)}
                    alt={thumbnail.alt}
                    src={thumbnail.src}
                    fallback={thumbnail.fallback}
                />
            )}
            {/* Date */}
            {!hasThumbnail && <DateColumn date={date} isTimeTbd={isTimeTbd} />}
            {/* Event Info */}
            <div className={`${getColClassName(INFO)}${truncate ? ' truncate' : null}`}>
                <BodyText height="compressed" weight="black" importance={2} itemProp="name">
                    {title}
                </BodyText>
                {hasThumbnail && !!date && !isTimeTbd && <SmallText className="thumb-date">{thumbnailDate}</SmallText>}
                {hasThumbnail && isTimeTbd && <SmallText className="thumb-date">TBD</SmallText>}
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
                            <meta itemProp="addressCountry" content={countryCode || 'US'} />
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
            {!!hasButton && !hasCheckbox && (
                <div className={`${getColClassName(BUTTON)}`}>
                    {!!minListPrice && showMinListPrice ? (
                        <MinListPriceButton minListPrice={minListPrice} isInternationalVenue={isInternationalVenue} />
                    ) : (
                        <Button>{!!dateRange ? BUTTON_TEXT.DATE_RANGE : BUTTON_TEXT.DATE}</Button>
                    )}
                </div>
            )}
            {/* Mobile Col for Min List Price */}
            {!!minListPrice && showMinListPrice && (
                <MobileMinListCol minListPrice={minListPrice} isInternationalVenue={isInternationalVenue} />
            )}
            <link className="schema-url" itemProp="url" href={hrefWithUtmTracking} />
            <meta itemProp="sameAs" content={hrefWithUtmTracking} />
            {!!imageUrl && <meta itemProp="image" content={imageUrl} />}
            {!!schemaDescription && <meta itemProp="description" content={schemaDescription} />}
            <div itemProp="offers" itemScope itemType="http://schema.org/AggregateOffer">
                <link itemProp="url" href={hrefWithUtmTracking} />
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
        </Fragment>
    );

    const eventRowProps = {
        className: BASE_CLASSNAME,
        itemScope: true,
        itemType: `http://schema.org/${eventType}`,
        role: 'row',
        onClick: e => {
            onChange(!checkboxState);
            setCheckboxState(!checkboxState);
            onClick(e);
        },
        ...htmlAttributes
    };

    return !!href.length ? (
        <Link href={href} type="anchor" {...eventRowProps}>
            {getEventRowContent()}
        </Link>
    ) : (
        <div {...eventRowProps}>{getEventRowContent()}</div>
    );
};

EventRow.BASE_CLASSNAME = 'vdp-event-row';
EventRow.getColClassName = colType => `${EventRow.BASE_CLASSNAME}__col--${colType}`;

EventRow.COL_CLASSNAMES = {
    BUTTON: 'button',
    DATE_RANGE: 'date-range',
    INFO: 'info',
    THUMBNAIL: 'thumbnail',
    CHECKBOX: 'checkbox'
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
        alt: PropTypes.string,
        fallback: PropTypes.string
    }),
    isTimeTbd: PropTypes.bool,
    imageUrl: PropTypes.string,
    minListPrice: PropTypes.number,
    isInternationalVenue: PropTypes.bool,
    schemaDescription: PropTypes.string,
    ticketCount: PropTypes.number,
    performerName: PropTypes.string,
    performerType: PropTypes.string,
    performerUrl: PropTypes.string,
    hasButton: PropTypes.bool,
    hasCheckbox: PropTypes.bool,
    /** onChange is passed a boolean indicating the new checkbox state */
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    eventType: PropTypes.string,
    showMinListPrice: PropTypes.bool,
    truncate: PropTypes.bool
};

export default EventRow;
