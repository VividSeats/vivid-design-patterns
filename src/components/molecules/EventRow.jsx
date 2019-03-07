import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import BodyText from '../atoms/BodyText';
import Button from '../atoms/Button';
import Link from '../atoms/Link';
import SmallText from '../atoms/SmallText';

const EventRow = ({ href, subtitle, title, date = null, dateRange = null, thumbnail = null }) => {
    const hasButton = !!date || !!dateRange;
    const momentDate = moment(new Date(date));
    const { getColClassName, BASE_CLASSNAME, COL_CLASSNAMES, BUTTON_TEXT } = EventRow;
    const { BUTTON, DATE, DATE_RANGE, INFO, THUMBNAIL } = COL_CLASSNAMES;

    return (
        <Link className={`vdp-row ${BASE_CLASSNAME}`} href={href} type="anchor">
            {/* Thumbnail Image */}
            {!!thumbnail && !!thumbnail.src && !!thumbnail.alt && (
                <div className={getColClassName(THUMBNAIL)}>
                    <img src={thumbnail.src} alt={thumbnail.alt} />
                </div>
            )}
            {/* Date */}
            {!!date && !!momentDate.isValid() && (
                <div className={getColClassName(DATE)}>
                    <SmallText alignment="center" state="muted">
                        {momentDate.format('ddd')}
                    </SmallText>
                    <BodyText height="compressed" weight="black" capitalization="uppercase" alignment="center" importance={2}>
                        {momentDate.format('MMM D')}
                    </BodyText>
                    <SmallText alignment="center" state="muted">
                        {momentDate.format('h:mm A')}
                    </SmallText>
                </div>
            )}
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
                <div className={getColClassName(BUTTON)}>
                    <Button>{!!date ? BUTTON_TEXT.DATE : BUTTON_TEXT.DATE_RANGE}</Button>
                </div>
            )}
        </Link>
    );
};

EventRow.BASE_CLASSNAME = 'vdp-event-row';
EventRow.getColClassName = colType => `${EventRow.BASE_CLASSNAME}__col--${colType}`;

EventRow.COL_CLASSNAMES = {
    BUTTON: 'button',
    DATE: 'date',
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
    date: PropTypes.string,
    thumbnail: PropTypes.shape({
        src: PropTypes.string,
        alt: PropTypes.string
    })
};

export default EventRow;
