import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import SmallText from './SmallText';
import BodyText from './BodyText';

export default function DateColumn({ date = null, isTimeTbd = false }) {
    const momentDate = moment(new Date(date));
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
            <SmallText alignment="center" state="muted">
                {momentDate.format('ddd')}
            </SmallText>
            <BodyText height="compressed" weight="black" capitalization="uppercase" alignment="center" importance={2}>
                {momentDate.format('MMM D')}
            </BodyText>
            <SmallText alignment="center" state="muted">
                {isTimeTbd ? 'TBD' : momentDate.format('h:mm A')}
            </SmallText>
        </div>
    );
}

DateColumn.propTypes = {
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.instanceOf(Date), PropTypes.bool]),
    isTimeTbd: PropTypes.bool
};
