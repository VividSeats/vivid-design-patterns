import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from './Icon';

const Button = ({
    children,
    block,
    muted,
    size,
    raised,
    selected,
    importance,
    className,
    href,
    type = 'submit',
    grouped,
    disabled,
    icon = null,
    onClick = () => {},
    onFocus = () => {},
    onMouseEnter = () => {},
    onMouseLeave = () => {},
    onBlur = () => {},
    ...htmlAttributes
}) => {
    const baseButtonClass = grouped ? 'vdp-grouped-button' : 'vdp-button';
    const buttonClassNames = classNames(baseButtonClass, {
        [`--${size}`]: size,
        [`--${importance}`]: importance,
        [`--disabled`]: disabled,
        [`--selected`]: selected,
        [`--muted`]: muted,
        [`--raised`]: raised,
        [`--block`]: block
    });

    const iconNode = icon ? <Icon className="vdp-button__icon" type={icon} /> : icon;

    const props = {
        className: className ? `${buttonClassNames} ${className}` : buttonClassNames,
        onMouseEnter,
        onMouseLeave,
        onClick,
        onFocus,
        onBlur,
        ...htmlAttributes
    };

    return href ? (
        <a {...{ ...props, href }}>
            {iconNode}
            {children}
        </a>
    ) : (
        <button {...{ ...props, type, disabled }}>
            {iconNode}
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    /** html button types eg submit, reset, button` */
    type: PropTypes.string,
    /** block property makes button 100% */
    block: PropTypes.bool,
    /** muted prop only works when importance is of type 'text' */
    muted: PropTypes.bool,
    /** renders to html class `--small`, `--large` */
    size: PropTypes.oneOf(['small', 'large']),
    /** renders to html class `--raised` */
    raised: PropTypes.bool,
    /** renders to html class `--select` */
    selected: PropTypes.bool,
    /** Components will render as anchor tags when href is provided */
    href: PropTypes.string,
    /** renders to html class `--disabled` */
    disabled: PropTypes.bool,
    className: PropTypes.string,
    /** has html class of `vdp-grouped-button` */
    grouped: PropTypes.bool,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onMouseLeave: PropTypes.func,
    onMouseEnter: PropTypes.func,
    /** renders to html `--secondary`, `--tertiary` `--text` */
    importance: PropTypes.oneOf(['secondary', 'tertiary', 'text']),
    /** adds a VDP icon to the left of the button */
    icon: PropTypes.string
};

export default Button;
