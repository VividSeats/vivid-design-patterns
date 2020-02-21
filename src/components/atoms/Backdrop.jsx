import 'core-js/es6/array';
import 'core-js/es6/object';
import 'core-js/es7/object';
import 'core-js/es6/string';
import 'core-js/es6/symbol';
import 'core-js/es6/weak-set';
import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

const animation = {
    enter: {
        opacity: 1
    },
    exit: {
        opacity: 0
    },
    transition: {
        duration: 0.3
    }
};

const Backdrop = ({ className = '', children, isOpen = false, onClick = () => {} }) => {
    return (
        <AnimatePresence>
            {isOpen ? (
                <motion.div
                    {...{
                        initial: animation.exit,
                        animate: animation.enter,
                        exit: animation.exit,
                        transition: animation.transition,
                        onClick,
                        className: `vdp-react-backdrop ${className}`
                    }}>
                    {children}
                </motion.div>
            ) : null}
        </AnimatePresence>
    );
};

Backdrop.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    isOpen: PropTypes.bool.isRequired,
    onClick: PropTypes.func
};

export default Backdrop;
