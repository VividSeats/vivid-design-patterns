import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import BodyText from '../atoms/BodyText';
import Button from '../atoms/Button';
import Column from './Column';
import Link from '../atoms/Link';
import Row from './Row';
import SmallText from '../atoms/SmallText';

const EventRow = ({ href, subtitle, title, date = null, dateRange = null, thumbnail = null }) => {
    const baseClassName = 'vp-event-row';
    const getColClassName = colType => `${baseClassName}__${colType}`;
    const hasButton = !!date || !!dateRange;

    const momentDate = moment(date);

    return (
        <Link className={baseClassName} href={href} type="anchor">
            <Row className={`--collapsed ${baseClassName}${hasButton && '--has-button'}`}>
                {/* Thumbnail Image */}
                {!!thumbnail && !!thumbnail.src && !!thumbnail.alt && (
                    <Column className={getColClassName('thumbnail')}>
                        <img src={thumbnail.src} alt={thumbnail.alt} />
                    </Column>
                )}
                {/* Date */}
                {!!momentDate && (
                    <Column className={getColClassName('date')}>
                        <SmallText alignment="center" state="muted">
                            {momentDate.format('dddd')}
                        </SmallText>
                        <BodyText height="compressed" weight="black" capitalization="uppercase" alignment="center" importance={2}>
                            {momentDate.format('MMM D')}
                        </BodyText>
                        <SmallText alignment="center" state="muted">
                            {momentDate.format('h:mm A')}
                        </SmallText>
                    </Column>
                )}
                {/* Event Info */}
                <Column className={getColClassName('info')}>
                    <BodyText height="compressed" weight="black" importance={2}>
                        {title}
                    </BodyText>
                    <SmallText state="muted">{subtitle}</SmallText>
                </Column>
                {/* Date Range */}
                {!!dateRange && (
                    <Column className={getColClassName('date-range')}>
                        <SmallText alignment="right" state="muted">
                            {dateRange}
                        </SmallText>
                    </Column>
                )}
                {/* Button */}
                {hasButton && (
                    <Column className={getColClassName('button')}>
                        <Button>{!!date ? 'Tickets' : 'View Event'}</Button>
                    </Column>
                )}
            </Row>
        </Link>
    );
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
