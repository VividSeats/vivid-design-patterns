import React from 'react';
import PropTypes from 'prop-types';
import Link from '../atoms/Link';
import Subhead from '../atoms/Subhead';

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
        groupName: '',
        limit: 5,
        onSelect: () => {},
        className: ''
    };

    toggleFilterGroupExpansion = e => {
        const { expanded } = this.state;
        const { children, limit } = this.props;
        e.preventDefault();
        this.setState({ filterLimit: expanded ? limit : children.length, expanded: !expanded });
    };

    handleSelection = (event, child) => {
        const { onSelect } = this.props;
        typeof child.props.onClick === 'function' && child.props.onClick(event);
        onSelect(event);
    };

    render() {
        const { filterLimit, expanded } = this.state;
        const { groupName, children, className, ...htmlAttributes } = this.props;
        const classNames = className ? `vp-filter-group ${className}` : 'vp-filter-group';
        return (
            <div className={classNames} {...htmlAttributes}>
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
                                <li key={index}>
                                    <Link href="#!" onClick={this.toggleFilterGroupExpansion}>
                                        more
                                    </Link>
                                </li>
                            )
                        )
                    )}
                    {!!expanded && React.Children.count(children) >= filterLimit && (
                        <li>
                            <Link href="#!" onClick={this.toggleFilterGroupExpansion}>
                                less
                            </Link>
                        </li>
                    )}
                </ul>
            </div>
        );
    }
}

export default FilterGroup;