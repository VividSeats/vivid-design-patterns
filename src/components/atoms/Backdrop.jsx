import React from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';

const Backdrop = ({ className = '', children, isOpen = false, onClick = () => {} }) => {
    const transitions = useTransition(isOpen, null, {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { duration: 300 }
    });

    return transitions.map(
        ({ item, props }) =>
            item && (
                <animated.div
                    style={props}
                    {...{
                        onClick,
                        className: `vdp-backdrop ${className}`
                    }}>
                    {children}
                </animated.div>
            )
    );
};

Backdrop.displayName = 'Backdrop';

Backdrop.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func
};

export default Backdrop;
