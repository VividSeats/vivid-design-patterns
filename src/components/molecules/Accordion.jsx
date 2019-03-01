import React from 'react';
import PropTypes from 'prop-types';
import Collapse from './Collapse';

class Accordion extends React.Component {
    static Collapse = Collapse;

    state = {
        openedIndex: typeof this.props.initialOpenedIndex !== 'undefined' ? this.props.initialOpenedIndex : this.props.openedIndex
    };

    setOpenedIndex = index => {
        this.setState({
            openedIndex: index
        });

        if (this.isControlled()) {
            this.props.onAccordionOpen(index);
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
        const { children } = this.props;
        return React.Children.map(children, (child, index) =>
            React.cloneElement(child, {
                open: this.getOpenedIndex() === index,
                onOpenChange: isOpen => isOpen && this.setOpenedIndex(index)
            })
        );
    }
}

Accordion.propTypes = {
    initialOpenedIndex: PropTypes.number,
    openedIndex: PropTypes.number,
    children: PropTypes.node,
    /** For use with controlled props. Fires when an accordion is open with the opened element's index */
    onAccordionOpen: PropTypes.func
};

Accordion.defaultProps = {
    initialOpenedIndex: -1,
    onAccordionOpen: () => {}
};

export default Accordion;
