import React from 'react';
import PropTypes from 'prop-types';
import { SlideDown } from 'react-slidedown';
import Button from '../atoms/Button';
import Subhead from '../atoms/Subhead';
import FilterGroupItem from '../atoms/FilterGroupItem';

/* eslint-disable */

class FilterGroup extends React.Component {
    static Item = FilterGroupItem;

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
        const classNames = className ? `vdp-filter-group ${className}` : 'vdp-filter-group';
        const childrenCount = React.Children.count(children);
        const filterLimit = !!expanded && childrenCount > limit ? childrenCount : limit;
        return (
            <div {...htmlAttributes} className={classNames}>
                <SlideDown>
                    <Subhead state={'muted'}>{groupName}</Subhead>
                    <ul>
                        {React.Children.map(children, (child, index) =>
                            index < filterLimit
                                ? React.cloneElement(child, {
                                      onClick: event => this.handleSelection(event, child)
                                  })
                                : index === Number(filterLimit) && (
                                      <Button importance={'text'} onClick={this.toggleFilterGroupExpansion}>
                                          more
                                      </Button>
                                  )
                        )}
                        {!!(expanded && childrenCount >= filterLimit) && (
                            <Button importance={'text'} onClick={this.toggleFilterGroupExpansion}>
                                less
                            </Button>
                        )}
                    </ul>
                </SlideDown>
            </div>
        );
    }
}

export default FilterGroup;
