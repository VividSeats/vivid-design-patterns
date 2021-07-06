import React from 'react';
import PropTypes from 'prop-types';
import SkeletonBone from '../atoms/SkeletonBone';

/* eslint react/no-array-index-key: 0 */
/* Disabled because all the item in the list are identical, for more information see: https://reactjs.org/docs/lists-and-keys.html#keys */

const SkeletonLoader = ({ rowCount, isLoading, firstColumnLineCount, secondColumnLineCount, children = null, skeletonBone }) => {
    if (!isLoading) {
        return children;
    }

    const dummySkeletonRows = [...new Array(rowCount)];
    return (
        <React.Fragment>
            {dummySkeletonRows.map((item, index) =>
                skeletonBone ? (
                    React.cloneElement(skeletonBone, { key: index })
                ) : (
                    <SkeletonBone key={index} firstColumnLineCount={firstColumnLineCount} secondColumnLineCount={secondColumnLineCount} />
                )
            )}
        </React.Fragment>
    );
};

SkeletonLoader.propTypes = {
    rowCount: PropTypes.number,
    isLoading: PropTypes.bool.isRequired,
    firstColumnLineCount: PropTypes.number,
    secondColumnLineCount: PropTypes.number,
    skeletonBone: PropTypes.node,
    children: PropTypes.node
};

SkeletonLoader.defaultProps = {
    rowCount: 25,
    firstColumnLineCount: 2,
    secondColumnLineCount: 2
};

export default SkeletonLoader;
