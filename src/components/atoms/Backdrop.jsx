import 'core-js/es6/string';
import 'core-js/es6/object';
import 'core-js/es7/object';
import 'core-js/es6/array';
import 'core-js/es7/array';
import 'core-js/es6/set';
import 'core-js/es7/set';
import 'core-js/modules/es6.regexp.constructor';

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
