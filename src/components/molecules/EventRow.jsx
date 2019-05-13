import React from 'react';
import PropTypes from 'prop-types';

import BodyText from '../atoms/BodyText';
import Button from '../atoms/Button';
import Link from '../atoms/Link';
import SmallText from '../atoms/SmallText';
import DateColumn from '../atoms/DateColumn';

const COM5Variant1 = ({ price = 0 }) => (
    <Button>
        <i>from</i> <strong>${price}</strong>
    </Button>
);

const MobileCOM5Variant1 = ({ price = 0 }) => (
    <div className="vdp-event-row__col COM5MobileVariant1">
        <SmallText>
            <i>from</i>
        </SmallText>
        <strong className="lead-price">${price}</strong>
    </div>
);

const EventRow = ({
    href,
    subtitle,
    title,
    date = null,
    dateRange = null,
    thumbnail = null,
    isTimeTbd = false,
    hasButton = true,
    isCOM5Variant1 = false,
    leadPrice = 0
}) => {
    const { getColClassName, BASE_CLASSNAME, COL_CLASSNAMES, BUTTON_TEXT } = EventRow;
    const { BUTTON, DATE_RANGE, INFO, THUMBNAIL } = COL_CLASSNAMES;

    return (
        <Link className={BASE_CLASSNAME} href={href} type="anchor">
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
                <BodyText height="compressed" weight="black" importance={2}>
                    {title}
                </BodyText>
                <SmallText state="muted">{subtitle}</SmallText>
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
                <div className={`${getColClassName(BUTTON)} ${isCOM5Variant1 && 'COM5ColWidth'}`}>
                    {!!isCOM5Variant1 ? (
                        <COM5Variant1 price={leadPrice} />
                    ) : (
                        <Button>{!!dateRange ? BUTTON_TEXT.DATE_RANGE : BUTTON_TEXT.DATE}</Button>
                    )}
                </div>
            )}
            {/* COM-5 Lead Pricing Variant */}
            {!!isCOM5Variant1 && leadPrice && <MobileCOM5Variant1 price={leadPrice} />}
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
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    dateRange: PropTypes.string,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
    thumbnail: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    }),
    isTimeTbd: PropTypes.bool,
    hasButton: PropTypes.bool,
    leadPrice: PropTypes.number,
    isCOM5Variant1: PropTypes.bool
};

COM5Variant1.propTypes = {
    price: PropTypes.number
};

MobileCOM5Variant1.propTypes = {
    price: PropTypes.number
};

export default EventRow;
