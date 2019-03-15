import React from 'react';
import PropTypes from 'prop-types';

/* eslint react/no-array-index-key: 0 */
/* Disabled because all the item in the list are identical, for more information see: https://reactjs.org/docs/lists-and-keys.html#keys */

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
