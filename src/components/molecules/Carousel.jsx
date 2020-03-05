import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const getEnterAnimationProps = (panelIndex, activePanelIndex) => ({
    x: `${(panelIndex - activePanelIndex) * 100}%`
});

const Carousel = ({
    activePanelIndex = 0,
    className = '',
    children,
    transition = { duration: 0.3, easing: 'easeInOut' },
    ...htmlAttributes
}) => {
    return (
        <div className={`ovf-h w-100 ${className}`} {...htmlAttributes}>
            {React.Children.map(children, (child, index) => {
                return React.cloneElement(child, {
                    isActive: index === activePanelIndex,
                    animate: getEnterAnimationProps(index, activePanelIndex),
                    transition
                });
            })}
        </div>
    );
};

const Panel = ({ className = '', children, isActive, style, ...htmlAttributes }) => {
    const [isHidden, setIsHidden] = React.useState(!isActive);
    const onAnimationStart = () => {
        setIsHidden(false);
    };

    const onAnimationComplete = () => {
        if (!isActive) {
            setIsHidden(true);
        }
    };

    return (
        <motion.div
            onAnimationStart={onAnimationStart}
            onAnimationComplete={onAnimationComplete}
            initial={false}
            style={{ display: isHidden ? 'none' : 'block', ...style }}
            className={`vdp-slide-panel h-100 w-100 ${className}`}
            {...htmlAttributes}>
            {children}
        </motion.div>
    );
};

Panel.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node
};

Carousel.Panel = Panel;
Carousel.propTypes = {
    activePanelIndex: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string
};

export default Carousel;
