import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from './InfiniteScroll';

class PseudoInfiniteScroll extends React.Component {
    state = {
        loadedRowCount: this.props.initialLoadedRowCount
    };

    loadMore = () => {
        const { loadedRowCount } = this.state;
        const { children, initialLoadedRowCount } = this.props;
        const rowCount = React.Children.count(children);
        const currentRowCount = loadedRowCount > rowCount ? rowCount : loadedRowCount;
        const difference = rowCount - currentRowCount;
        const rowsToAdd = difference < initialLoadedRowCount ? difference : initialLoadedRowCount;

        this.setState({
            loadedRowCount: currentRowCount + rowsToAdd
        });
        this.props.onLoadMore();
    };

    render() {
        const { loadedRowCount } = this.state;
        const { children, initialLoadedRowCount, className, ...htmlAttributes } = this.props;
        const childrenArray = React.Children.toArray(children);

        const renderedRows = childrenArray.slice(0, loadedRowCount);
        return (
            <InfiniteScroll className={className} onLoadMore={this.loadMore} {...htmlAttributes}>
                {renderedRows}
            </InfiniteScroll>
        );
    }
}

PseudoInfiniteScroll.propTypes = {
    initialLoadedRowCount: PropTypes.number,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    /** Callback function called once more rows are added **/
    onLoadMore: PropTypes.func
};

PseudoInfiniteScroll.defaultProps = {
    initialLoadedRowCount: 25,
    className: '',
    onLoadMore: () => {}
};

export default PseudoInfiniteScroll;
