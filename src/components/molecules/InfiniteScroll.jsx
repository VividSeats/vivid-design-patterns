import React from 'react';
import PropTypes from 'prop-types';
import SkeletonBone from '../atoms/SkeletonBone';
import Button from '../atoms/Button';

class InfiniteScroll extends React.Component {
    scrollContainerRef = React.createRef();

    state = {
        showLoadMoreButton: true
    };

    componentDidMount() {
        this.scrollContainerHeight = this.scrollContainerRef.current.clientHeight;
    }

    onScroll = () => {
        const { current } = this.scrollContainerRef;
        const { scrollHeight, scrollTop } = current;
        const scrolledLength = scrollHeight - this.scrollContainerHeight;
        const showLoadMoreButton = this.state.showLoadMoreButton && this.props.showLoadMoreButton;
        if (showLoadMoreButton || scrollTop <= scrolledLength * 0.8) {
            return;
        }

        this.props.onLoadMore();
    };

    showLoadMoreButtonClick = () => {
        this.props.onLoadMore();
        this.props.onLoadMoreButtonClick();
        this.setState({
            showLoadMoreButton: false
        });
    };

    render() {
        const {
            children,
            onLoadMore,
            loadMoreButtonText,
            onLoadMoreButtonClick,
            isLoading,
            showLoadMoreButton: showLoadMoreButtonFroProps,
            className,
            ...htmlAttributes
        } = this.props;
        const showLoadMoreButton = this.state.showLoadMoreButton && showLoadMoreButtonFroProps;
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
                {showLoadMoreButton && (
                    <Button importance="tertiary" onClick={this.showLoadMoreButtonClick}>
                        {loadMoreButtonText}
                    </Button>
                )}
            </div>
        );
    }
}

InfiniteScroll.propTypes = {
    /** Since this is within an onScroll handler, this will need to be debounced * */
    onLoadMore: PropTypes.func.isRequired,
    loadMoreButtonText: PropTypes.string,
    onLoadMoreButtonClick: PropTypes.func,
    showLoadMoreButton: PropTypes.bool,
    isLoading: PropTypes.bool,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

InfiniteScroll.defaultProps = {
    className: '',
    isLoading: false,
    loadMoreButtonText: 'Show More',
    showLoadMoreButton: false,
    onLoadMoreButtonClick: () => {}
};

export default InfiniteScroll;
