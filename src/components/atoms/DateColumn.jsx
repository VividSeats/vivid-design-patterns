import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import SmallText from './SmallText';
import BodyText from './BodyText';
import Badge from './Badge';

export default function DateColumn({ date, isTimeTbd = false }) {
    const momentDate = moment(date);
    const eventRowClass = 'vdp-event-row__col--date';

    if (!date) {
        return (
            <div className={eventRowClass}>
                <BodyText height="compressed" weight="black" capitalization="uppercase" alignment="center" importance={2}>
                    TBD
                </BodyText>
            </div>
        );
    }

    return (
        <div className={eventRowClass}>
            <meta itemProp="startDate" title={momentDate.unix()} content={`${momentDate.format('YYYY-MM-DD')}`} />
            <meta itemProp="endDate" title={momentDate.unix()} content={`${momentDate.format('YYYY-MM-DD')}`} />
            <SmallText alignment="center" state="muted">
                {momentDate.format('ddd')}
            </SmallText>
            <BodyText height="compressed" weight="black" capitalization="uppercase" alignment="center" importance={2}>
                {momentDate.format('MMM DD')}
            </BodyText>
            {!isTimeTbd && (
                <SmallText alignment="center" state="muted">
                    {momentDate.format('h:mm A')}
                </SmallText>
            )}
            {!momentDate.isSame(new Date(), 'year') && (
                <Badge type="rounded" styleAs="warning">
                    {momentDate.format('YYYY')}
                </Badge>
            )}
        </div>
    );
}

DateColumn.propTypes = {
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
    isTimeTbd: PropTypes.bool
};
