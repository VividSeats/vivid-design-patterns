import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Button from '../atoms/Button';

class ExpandableContent extends React.Component {
    static propTypes = {
        className: PropTypes.string,
        maxHeight: PropTypes.string,
        buttonText: PropTypes.string,
        children: PropTypes.node.isRequired
    };

    static defaultProps = {
        className: '',
        maxHeight: '30rem',
        buttonText: 'Show More'
    };

    constructor(props) {
        super(props);
        this.container = React.createRef();
    }

    state = {
        isCollapsed: true
    };

    componentDidMount() {
        const container = this.container.current;
        const exceedsMaxHeight = container.scrollHeight - container.clientHeight > 0;
        if (!exceedsMaxHeight) {
            this.setState({
                isCollapsed: false
            });
        }
    }

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
            <div
                ref={this.container}
                className={expandableClassNames}
                {...htmlAttributes}
                style={{ maxHeight: isCollapsed ? maxHeight : '999rem' }}>
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
