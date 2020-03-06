import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import classNames from 'classnames';

const getEnterAnimationProps = activePanelIndex => ({
    x: `-${activePanelIndex * 100}%`
});

const Carousel = ({
    activePanelIndex = 0,
    className = '',
    children,
    transition = { duration: 0.3, easing: 'easeInOut' },
    ...htmlAttributes
}) => {
    const [isAnimating, setIsAnimating] = React.useState(false);
    return (
        <div className={`vdp-carousel ${className}`} {...htmlAttributes}>
            <motion.div
                className="vdp-carousel__container"
                onAnimationStart={() => setIsAnimating(true)}
                onAnimationComplete={() => setIsAnimating(false)}
                initial={false}
                transition={transition}
                animate={getEnterAnimationProps(activePanelIndex)}>
                {React.Children.map(children, (child, index) => {
                    const isActive = index === activePanelIndex;
                    return React.cloneElement(child, {
                        isVisible: isAnimating ? true : isActive
                    });
                })}
            </motion.div>
        </div>
    );
};

const Panel = ({ className = '', children, isVisible = true, ...htmlAttributes }) => {
    const carouselClassNames = classNames('vdp-carousel__slide', {
        [className]: className,
        '--visible': isVisible
    });

    return (
        <div className={carouselClassNames} {...htmlAttributes}>
            {children}
        </div>
    );
};

Panel.propTypes = {
    isVisible: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.node
};

Carousel.Panel = Panel;
Carousel.propTypes = {
    activePanelIndex: PropTypes.number,
    children: PropTypes.node,
    className: PropTypes.string,
    /** framer-motion transition property */
    transition: PropTypes.shape({
        duration: PropTypes.number,
        easing: PropTypes.string
    })
};

export default Carousel;
