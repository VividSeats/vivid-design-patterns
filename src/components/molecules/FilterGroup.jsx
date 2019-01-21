import React from 'react';
import PropTypes from 'prop-types';
import Subhead from '../atoms/Subhead';
import Link from '../atoms/Link';

class FilterGroup extends React.Component {
    specifiedLimit = this.props.limit || 5;
    state = { filterLimit: this.specifiedLimit, expanded: false };

    filterSelection = () => {
        const { expanded } = this.state;
        const { children } = this.props;
        this.setState({ filterLimit: expanded ? this.specifiedLimit : children.length, expanded: !expanded });
    };

    render() {
        const { filterLimit, expanded } = this.state;
        const { groupName, children, className, ...htmlAttributes } = this.props;

        const baseLinkGroupClass = `vp-filter-group`;
        const props = {
            className: className ? `${baseLinkGroupClass} ${className}` : baseLinkGroupClass,
            ...htmlAttributes
        };
        return (
            <ul {...{ ...props, ...htmlAttributes }}>
                <li>
                    <Subhead>{groupName}</Subhead>
                </li>
                {React.Children.map(children, (child, index) => (
                    <li className="vp-filter-group__item">
                        {index < filterLimit ? child : index === Number(filterLimit) && <Link onClick={this.filterSelection}>more</Link>}
                    </li>
                ))}
                {!!expanded && (
                    <li className="vp-filter-group__item">
                        <Link onClick={this.filterSelection}>less</Link>
                    </li>
                )}
            </ul>
        );
    }
}

FilterGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    groupName: PropTypes.string.isRequired,
    limit: PropTypes.number
};

FilterGroup.defaultTypes = {};

export default FilterGroup;
