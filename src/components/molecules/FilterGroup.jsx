import React from 'react';
import PropTypes from 'prop-types';
import { SlideDown } from 'react-slidedown';
import Link from '../atoms/Link';
import Subhead from '../atoms/Subhead';

/* eslint-disable */

class FilterGroup extends React.Component {
    state = { expanded: false };

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

    toggleFilterGroupExpansion = e => {
        const { expanded } = this.state;
        e.preventDefault();
        this.setState({ expanded: !expanded });
    };

    handleSelection = (event, child) => {
        const { onSelect } = this.props;
        if (typeof child.props.onClick === 'function') {
            child.props.onClick(event);
        }
        onSelect(event);
    };

    render() {
        const { expanded } = this.state;
        const { groupName, children, className, limit, ...htmlAttributes } = this.props;
        const classNames = className ? `vp-filter-group ${className}` : 'vp-filter-group';
        const childrenCount = React.Children.count(children);
        const filterLimit = !!expanded && childrenCount > limit ? childrenCount : limit;
        return (
            <div {...htmlAttributes}>
                <SlideDown className={classNames}>
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
                        {!!(expanded && childrenCount >= filterLimit) && (
                            <li>
                                <Link href="javascript:void(0)" onClick={this.toggleFilterGroupExpansion}>
                                    less
                                </Link>
                            </li>
                        )}
                    </ul>
                </SlideDown>
            </div>
        );
    }
}

export default FilterGroup;
