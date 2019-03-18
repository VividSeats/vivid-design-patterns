import React from 'react';
import PropTypes from 'prop-types';
import SkeletonBone from '../atoms/SkeletonBone';

class InfiniteScroll extends React.Component {
    scrollContainerRef = React.createRef();

    componentDidMount() {
        this.scrollContainerHeight = this.scrollContainerRef.current.clientHeight;
    }

    onScroll = () => {
        const { current } = this.scrollContainerRef;
        const { scrollHeight, scrollTop } = current;
        const scrolledLength = scrollHeight - this.scrollContainerHeight;
        if (scrollTop <= scrolledLength * 0.8) {
            return;
        }

        this.props.onLoadMore();
    };

    render() {
        const { children, onLoadMore, isLoading, className, ...htmlAttributes } = this.props;
        return (
            <div className={`vdp-infinite-scroll ${className}`} ref={this.scrollContainerRef} onScroll={this.onScroll} {...htmlAttributes}>
                {children}
                {isLoading && (
                    <React.Fragment>
                        <SkeletonBone />
                        <SkeletonBone />
                        <SkeletonBone />
                    </React.Fragment>
                )}
            </div>
        );
    }
}

InfiniteScroll.propTypes = {
    onLoadMore: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

InfiniteScroll.defaultProps = {
    className: '',
    isLoading: false
};

export default InfiniteScroll;
