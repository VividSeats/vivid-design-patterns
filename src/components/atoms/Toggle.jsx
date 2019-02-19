import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Toggle extends Component {
    static propTypes = {
        title: PropTypes.string,
        className: PropTypes.string,
        ariaLabel: PropTypes.string,
        on: PropTypes.bool,
        onToggle: PropTypes.func,
        defaultOn: PropTypes.bool
    };

    static defaultProps = {
        title: '',
        className: '',
        ariaLabel: 'toggle',
        onToggle: () => {},
        defaultOn: false
    };

    state = {
        on: this.props.on || this.props.defaultOn
    };

    onToggle = e => {
        const on = e.target.checked;

        if (!this.isControlled('on')) {
            this.setState({ on }, () => {
                this.props.onToggle(this.state.on);
            });
        } else {
            this.props.onToggle(on);
        }
    };

    isControlled = propName => this.props[propName] !== undefined;

    render() {
        const { title, className, ariaLabel, on, onToggle, defaultOn, ...htmlProps } = this.props;
        const checked = this.isControlled('on') ? this.props.on : this.state.on;

        return (
            <label className={`vdp-toggle ${className}`} {...htmlProps}>
                {!!title && <span className="vdp-toggle__label">{title}</span>}
                <input className="vdp-toggle__control" type="checkbox" onChange={this.onToggle} checked={checked} hidden />
                <span className="vdp-toggle__thumb" />
            </label>
        );
    }
}

export default Toggle;
