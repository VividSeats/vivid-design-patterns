import React from 'react';
import PropTypes from 'prop-types';
import { SlideDown } from 'react-slidedown';
import Link from '../atoms/Link';
import Subhead from '../atoms/Subhead';

/* eslint-disable */

class FilterGroup extends React.Component {
    state = { filterLimit: this.props.limit, expanded: false };

    static propTypes = {
        onSelect: PropTypes.func,
        limit: PropTypes.number,
        groupName: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
        className: PropTypes.string
    };

    static defaultProps = {
        limit: 5,
        onSelect: () => {},
        className: ''
    };

    componentWillReceiveProps(nextProps) {
        const { expanded } = this.state;
        const { limit } = this.props;
        const newLengthOfChildren = nextProps.children.length;
        if (!!expanded && React.Children.count !== newLengthOfChildren) {
            this.setState({ filterLimit: newLengthOfChildren > limit ? newLengthOfChildren : limit });
        }
    }

    toggleFilterGroupExpansion = e => {
        const { expanded } = this.state;
        const { children, limit } = this.props;
        e.preventDefault();
        this.setState({ filterLimit: expanded ? limit : children.length, expanded: !expanded });
    };

    handleSelection = (event, child) => {
        const { onSelect } = this.props;
        if (typeof child.props.onClick === 'function') {
            child.props.onClick(event);
        }
        onSelect(event);
    };

    render() {
        const { filterLimit, expanded } = this.state;
        const { groupName, children, className, ...htmlAttributes } = this.props;
        const classNames = className ? `vp-filter-group ${className}` : 'vp-filter-group';
        return (
            <SlideDown className={classNames} {...htmlAttributes}>
                <Subhead>{groupName}</Subhead>
                <ul>
                    {React.Children.map(children, (child, index) =>
                        index < filterLimit ? (
                            <li key={index}>
                                {React.cloneElement(child, {
                                    onClick: event => this.handleSelection(event, child)
                                })}
                            </li>
                        ) : (
                            index === Number(filterLimit) && (
                                <li key="moreButton">
                                    <Link href="javascript:void(0)" onClick={this.toggleFilterGroupExpansion}>
                                        more
                                    </Link>
                                </li>
                            )
                        )
                    )}
                    {!!(expanded && React.Children.count(children) >= filterLimit) && (
                        <li>
                            <Link href="javascript:void(0)" onClick={this.toggleFilterGroupExpansion}>
                                less
                            </Link>
                        </li>
                    )}
                </ul>
            </SlideDown>
        );
    }
}

export default FilterGroup;
