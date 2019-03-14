import React from 'react';
import PropTypes from 'prop-types';

const SkeletonBone = ({ firstColumnLineCount, secondColumnLineCount }) => {
    const firstColumnRows = [...new Array(firstColumnLineCount)];
    const secondColumnRows = [...new Array(secondColumnLineCount)];

    return (
        <div className="vdp-event-row--skeleton">
            <div className="vdp-event-row__col--date">
                {firstColumnRows.map((value, index) => (
                    <div className="skeleton__line" key={index} />
                ))}
            </div>
            <div className="vdp-event-row__col--info">
                {secondColumnRows.map((value, index) => (
                    <div className="skeleton__line" key={index} />
                ))}
            </div>
        </div>
    );
};

SkeletonBone.propTypes = {
    firstColumnLineCount: PropTypes.number,
    secondColumnLineCount: PropTypes.number
};

SkeletonBone.defaultProps = {
    firstColumnLineCount: 3,
    secondColumnLineCount: 2
};

export default SkeletonBone;
