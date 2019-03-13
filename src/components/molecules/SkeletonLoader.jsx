import React from 'react';
import SkeletonBone from '../atoms/SkeletonBone';
import PropTypes from 'prop-types';

const SkeletonLoader = ({ rowCount, isLoading, firstColumnLineCount, secondColumnLineCount, children, skeletonBone }) => {
    if (!isLoading) {
        return children;
    }

    const dummySkeletonRows = [...new Array(rowCount)];
    return (
        <React.Fragment>
            {dummySkeletonRows.map((item, index) => {
                return skeletonBone ? (
                    React.cloneElement(skeletonBone, { key: index })
                ) : (
                    <SkeletonBone key={index} firstColumnLineCount={firstColumnLineCount} secondColumnLineCount={secondColumnLineCount} />
                );
            })}
        </React.Fragment>
    );
};

SkeletonLoader.propTypes = {
    rowCount: PropTypes.number,
    isLoading: PropTypes.bool.isRequired,
    firstColumnLineCount: PropTypes.number,
    secondColumnLineCount: PropTypes.number
};

SkeletonLoader.defaultProps = {
    rowCount: 25,
    firstColumnLineCount: 3,
    secondColumnLineCount: 2
};

export default SkeletonLoader;
