import React from 'react';
import PropTypes from 'prop-types';

import BodyText from '../atoms/BodyText';
import Button from '../atoms/Button';
import Column from './Column';
import Link from '../atoms/Link';
import Row from './Row';
import SmallText from '../atoms/SmallText';

const EventRow = ({ href, subtitle, title, dateRange = null, Image = null, production = null, type = 'default' }) => {
    const { DATE_RANGE, IMAGE, PRODUCTION } = EventRow.TYPES;
    const isType = staticType => staticType === type;
    const hasButton = isType(PRODUCTION) || isType(DATE_RANGE);

    const { dayOfWeek, month, date, time } = production || {};
    const eventRowClassName = 'vp-event-row';

    /*
    <a href="" class="vp-row--collapsed vp-event-row--has-button">
        <div class="vp-col vp-event-row__date productionsDateCol">
        <c:if test='${!production.dateTbd}'>
        <p class="vp-type-small--muted--center">
        THu
        </p>
        </c:if>
        <p class="vp-type-body2--compressed--blk--caps--center">
        AUG 12s
        </p>
        <p class="vp-type-small--muted--center--lowercase">
        7:00pm
        </p>
        </div>
        <div class="vp-col vp-event-row__info">
        <p class="vp-type-body2--compressed--blk">
        Production Name
        </p>
        <p class="vp-type-small--muted">
        Venue Name
        -
        City, State
        </p>
        </div>
        <div class="vp-col vp-event-row__button">
        <button class="vp-button">Tickets</button>
        </div>
    </a>
    */

    return (
        <Link className={eventRowClassName} href={href}>
            <Row className={`--collapsed ${eventRowClassName}${hasButton && '--has-button'}`}>
                {!!Image && isType(IMAGE) && Image}
                {!!production && isType(PRODUCTION) && (
                    <Column className={`${eventRowClassName}__thumb`}>
                        <SmallText alignment="center" state="muted">
                            {!!dayOfWeek && dayOfWeek}
                        </SmallText>
                        <BodyText height="compressed" weight="black" capitalization="uppercase" alignment="center" importance={2}>
                            {!!month && `${month} `}
                            {!!date && date}
                        </BodyText>
                        <SmallText alignment="center" state="muted" capitalization="lowercase">
                            {!!time && time}
                        </SmallText>
                    </Column>
                )}
                <Column className={`${eventRowClassName}__info`}>
                    <BodyText height="compressed" weight="black" importance={2}>
                        {title}
                    </BodyText>
                    <SmallText state="muted">{subtitle}</SmallText>
                </Column>
                {!!dateRange && isType(DATE_RANGE) && <Column className={`${eventRowClassName}`}>{dateRange}</Column>}
                {hasButton && (
                    <Column className={`${eventRowClassName}__button`}>
                        <Button>{isType(PRODUCTION) ? 'Tickets' : 'View Event'}</Button>
                    </Column>
                )}
            </Row>
        </Link>
    );
};

EventRow.TYPES = {
    DATE_RANGE: 'dateRange',
    IMAGE: 'image',
    PRODUCTION: 'production'
};

EventRow.propTypes = {
    href: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    dateRange: PropTypes.string,
    Image: PropTypes.node,
    production: PropTypes.shape({
        dayOfWeek: PropTypes.string,
        month: PropTypes.string,
        date: PropTypes.string,
        time: PropTypes.string
    }),
    type: PropTypes.oneOf(['default', 'dateRange', 'image', 'production'])
};

export default EventRow;
