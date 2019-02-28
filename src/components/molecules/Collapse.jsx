import React from 'react';
import Subhead from '../atoms/Subhead';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Collapse extends React.Component {
    state = {
        open: this.props.open || this.props.initialOpen
    };

    static Title = ({ children, onClick }) => {
        return (
            <div className={'vdp-collapse__title'} onClick={onClick}>
                {React.Children.map(children, child => {
                    if (typeof child.type === 'function') {
                        return child;
                    }
                    return <Subhead state={'muted'}>{child}</Subhead>;
                })}
            </div>
        );
    };

    isControlled() {
        return typeof this.props.open !== 'undefined';
    }
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

    render() {
        const { wrap, mobileOnlyCollapse, open, initialOpen, onOpenChange, children, className, title, ...htmlAttributes } = this.props;

        const collapseClassName = classNames('vdp-collapse', { '-wrap': wrap, '--mobile': mobileOnlyCollapse })
            .split(' ')
            .join('');

        const dataState = this.getOpenState() ? 'opened' : 'closed';
        return (
            <div className={`${collapseClassName} ${className}`} {...htmlAttributes} data-state={dataState}>
                {!!title && <Collapse.Title onClick={this.toggleCollapse}>{title}</Collapse.Title>}
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
    mobile: PropTypes.bool,
    onOpenChange: PropTypes.func,
    className: PropTypes.string,
    /** Can either be a string or a node eg <h1>{title}</h1> */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
};

Collapse.defaultProps = {
    onOpenChange: () => {},
    mobileOnlyCollapse: false,
    wrap: false,
    title: '',
    className: ''
};

export default Collapse;
