import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../atoms/Button';

class ExpandableContent extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        maxHeight: PropTypes.string,
        isDefaultCollapsed: PropTypes.bool,
        buttonText: PropTypes.string,
        children: PropTypes.node.isRequired
    };

    static defaultProps = {
        className: '',
        maxHeight: '40rem',
        isDefaultCollapsed: true,
        buttonText: 'Show More'
    };

    state = {
        isCollapsed: this.props.isDefaultCollapsed
    };

    onClick = e => {
        e.preventDefault();
        this.setState({
            isCollapsed: false
        });
    };

    render() {
        const { className, maxHeight, buttonText, children, ...htmlAttributes } = this.props;
        const { isCollapsed } = this.state;

        const expandableClassNames = classNames('vdp-expandable-content', {
            [className]: className,
            __collapsed: isCollapsed
        });

        return (
            <div className={expandableClassNames} {...htmlAttributes}>
                {children}
                {isCollapsed && (
                    <Button size="large" importance="tertiary" onClick={this.onClick} type="button">
                        {buttonText}
                    </Button>
                )}
            </div>
        );
    }
}

export default ExpandableContent;
