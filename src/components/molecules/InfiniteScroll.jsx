import React from 'react';
import PropTypes from 'prop-types';

class InfiniteScroll extends React.Component {
    state = {
        loadedRowCount: this.props.initialLoadedRowCount
    };

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

        const { loadedRowCount } = this.state;
        const { children, initialLoadedRowCount } = this.props;
        const rowCount = React.Children.count(children);
        const currentRowCount = loadedRowCount > rowCount ? rowCount : loadedRowCount;
        const difference = rowCount - currentRowCount;
        const rowsToAdd = difference < initialLoadedRowCount ? difference : initialLoadedRowCount;

        this.setState({
            loadedRowCount: currentRowCount + rowsToAdd
        });
    };

    render() {
        const { loadedRowCount } = this.state;
        const { children, initialLoadedRowCount, className, ...htmlAttributes } = this.props;
        const childrenArray = React.Children.toArray(children);

        const renderedRows = childrenArray.slice(0, loadedRowCount);
        console.log('sliced', renderedRows);
        return (
            <div className={`vdp-infinite-scroll ${className}`} ref={this.scrollContainerRef} onScroll={this.onScroll} {...htmlAttributes}>
                {renderedRows}
            </div>
        );
    }
}

InfiniteScroll.propTypes = {
    initialLoadedRowCount: PropTypes.number,
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

InfiniteScroll.defaultProps = {
    initialLoadedRowCount: 25,
    className: ''
};

export default InfiniteScroll;
