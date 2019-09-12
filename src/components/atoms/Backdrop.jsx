import 'core-js';
import 'core-js/es7';
import 'core-js/es6';
import React from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring/web.cjs';

const Backdrop = ({ className = '', children, isOpen = false, onClick = () => {} }) => {
    const transitions = useTransition(isOpen, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 300 }
    });

    return transitions.map(
        ({ item, props, key }) =>
            item && (
                <animated.div
                    key={key}
                    style={props}
                    {...{
                        onClick,
                        className: `vdp-react-backdrop ${className}`
                    }}>
                    {children}
                </animated.div>
            )
    );
};

Backdrop.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func
};

export default Backdrop;
