import React from 'react';
import PropTypes from 'prop-types';
import Collapse from './Collapse';

/* eslint-disable react/sort-comp */

class Accordion extends React.Component {
    static Collapse = Collapse;

    state = {
        openedIndex: typeof this.props.initialOpenedIndex !== 'undefined' ? this.props.initialOpenedIndex : this.props.openedIndex
    };

    setOpenedIndex = index => {
        this.setState(({ openedIndex }) => ({ openedIndex: openedIndex === index ? -1 : index }));

        if (this.isControlled()) {
            this.props.onAccordionOpen(this.props.openedIndex === index ? -1 : index);
        }
    };

    getOpenedIndex() {
        if (this.isControlled()) {
            return this.props.openedIndex;
        }

        return this.state.openedIndex;
    }

    isControlled() {
        return this.props.openedIndex !== undefined;
    }

    render() {
        const { children, isMobile } = this.props;
        return React.Children.toArray(children).map((child, index) =>
            React.cloneElement(child, {
                collapseOnMobileOnly: isMobile || child.props.collapseOnMobileOnly,
                open: this.getOpenedIndex() === index,
                onOpenChange: () => this.setOpenedIndex(index)
            })
        );
    }
}

Accordion.propTypes = {
    initialOpenedIndex: PropTypes.number,
    /** For controlled components. Use -1 to indicate no Collapse components are open. */
    openedIndex: PropTypes.number,
    children: PropTypes.node,
    isMobile: PropTypes.bool,
    /** For use with controlled props. Fires when an accordion is open with the opened element's index */
    onAccordionOpen: PropTypes.func
};

Accordion.defaultProps = {
    initialOpenedIndex: -1,
    onAccordionOpen: () => {}
};

export default Accordion;
