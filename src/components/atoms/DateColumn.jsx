import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import SmallText from './SmallText';
import BodyText from './BodyText';

export default function DateColumn({ date, isTimeTbd = false, includeSchemaData = true }) {
    const momentDate = moment(date);
    const eventRowClass = 'vdp-event-row__col--date';

    if (!date) {
        return (
            <div className={eventRowClass}>
                <BodyText weight="medium">Date TBD</BodyText>
            </div>
        );
    }

    return (
        <div className={eventRowClass}>
            <meta
                {...(includeSchemaData ? { itemProp: 'startDate' } : {})}
                title={momentDate.unix()}
                content={`${momentDate.format('YYYY-MM-DD')}`}
            />
            <meta
                {...(includeSchemaData ? { itemProp: 'endDate' } : {})}
                title={momentDate.unix()}
                content={`${momentDate.format('YYYY-MM-DD')}`}
            />
            <BodyText weight="medium" className="--highlight">
                {momentDate.format('MMM DD')}
                {!momentDate.isSame(new Date(), 'year') && <span className="event-row-year">,&nbsp;{momentDate.format('YYYY')}</span>}
            </BodyText>
            <SmallText>
                {momentDate.format('ddd')}
                {!isTimeTbd && <span className="vdp-type--lowercase">&nbsp;&bull;&nbsp;{momentDate.format('h:mmA')}</span>}
            </SmallText>
        </div>
    );
}

DateColumn.propTypes = {
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date)]),
    isTimeTbd: PropTypes.bool,
    includeSchemaData: PropTypes.bool
};
