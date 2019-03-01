import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Subhead from '../atoms/Subhead';
import onEnterPress from '../../utils/onEnterPress';

class Collapse extends React.Component {
    static Title = ({ children, onClick, onKeyPress }) => (
        <div className="vdp-collapse__title" onClick={onClick} onKeyPress={onKeyPress}>
            {React.Children.map(children, child => {
                if (typeof child.type === 'function') {
                    return child;
                }
                return <Subhead state="muted">{child}</Subhead>;
            })}
        </div>
    );

    state = {
        open: this.props.open || this.props.initialOpen
    };

    getOpenState() {
        if (this.isControlled()) {
            return this.props.open;
        }

        return this.state.open;
    }

    toggleCollapse = () => {
        if (this.isControlled()) {
            this.setState(({ open }) => ({ open: !open }));
            this.props.onOpenChange(!this.getOpenState());
        } else {
            this.setState(({ open }) => ({ open: !open }));
        }
    };

    onKeyPress = e => {
        onEnterPress(this.toggleCollapse, e);
    };

    isControlled() {
        return typeof this.props.open !== 'undefined';
    }

    render() {
        const { wrap, collapseOnMobileOnly, open, initialOpen, onOpenChange, children, className, title, ...htmlAttributes } = this.props;

        const collapseClassName = classNames('vdp-collapse', { '-wrap': wrap, '--mobile': collapseOnMobileOnly })
            .split(' ')
            .join('');

        const dataState = this.getOpenState() ? 'opened' : 'closed';
        return (
            <div className={`${collapseClassName} ${className}`} {...htmlAttributes} data-state={dataState}>
                {!!title && (
                    <Collapse.Title onKeyPress={this.onKeyPress} onClick={this.toggleCollapse}>
                        {title}
                    </Collapse.Title>
                )}
                <div className="vdp-collapse__content">{children}</div>
            </div>
        );
    }
}

Collapse.propTypes = {
    /** For controlled component */
    open: PropTypes.bool,
    /** setting inital open for uncontrolled component */
    initialOpen: PropTypes.bool,
    wrap: PropTypes.bool,
    collapseOnMobileOnly: PropTypes.bool,
    onOpenChange: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.node,
    /** Can either be a string or a node eg <h1>{title}</h1> */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

Collapse.defaultProps = {
    onOpenChange: () => {},
    collapseOnMobileOnly: false,
    wrap: false,
    title: '',
    className: ''
};

export default Collapse;
