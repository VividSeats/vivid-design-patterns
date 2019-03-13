import React from 'react';
import PropTypes from 'prop-types';

const SkeletonLoader = ({ rowCount, isLoading, firstColumnLineCount, secondColumnLineCount, children, skeletonBone }) => {
    if (!isLoading) {
        return children;
    }

    return (
        <React.Fragment>
            {rowCount.map((item, index) => {
                if (skeletonBone) {
                    return skeletonBone;
                }

                return <SkeletonBone />;
            })}
        </React.Fragment>
    );
};

SkeletonLoader.propTypes = {
    rowCount: PropTypes.number,
    isLoading: PropTypes.bool.isRequired,
    firstColumnLineCount: PropTypes.string,
    secondColumnLineCount: PropTypes.string
};

SkeletonLoader.defaultProps = {
    rowCount: 25,
    firstColumnLineCount: 3,
    secondColumnLineCount: 2
};
