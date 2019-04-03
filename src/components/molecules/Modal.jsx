import React from 'react';
import PropTypes from 'prop-types';

import ModalHeader from '../atoms/ModalHeader';
import ModalBody from '../atoms/ModalBody';
import ModalFooter from '../atoms/ModalFooter';
import Backdrop from '../atoms/Backdrop';

class Modal extends React.Component {
    static Header = ModalHeader;
    static Body = ModalBody;
    static Footer = ModalFooter;
    static Backdrop = Backdrop;
    static TYPES = ['sheet'];

    static DATA_STATE = {
        OPENED: 'opened',
        OPENING: 'opening',
        CLOSED: 'closed',
        CLOSING: 'closing'
    };

    static propTypes = {
        className: PropTypes.string,
        children: PropTypes.node,
        dataState: PropTypes.oneOf([Modal.DATA_STATE.OPENED, Modal.DATA_STATE.CLOSED]),
        disableBackdrop: PropTypes.bool,
        onClose: PropTypes.func,
        onOpen: PropTypes.func,
        title: PropTypes.string,
        type: PropTypes.oneOf(Modal.TYPES)
    };

    static defaultProps = {
        dataState: Modal.DATA_STATE.CLOSED,
        onOpen: () => {},
        onClose: () => {}
    };

    constructor(props) {
        super(props);

        this.state = {
            dataState: this.props.dataState
        };
    }

    componentDidUpdate(prevProps, prevState) {
        const { props, state } = this;
        const { OPENED, OPENING, CLOSED, CLOSING } = Modal.DATA_STATE;
        const TRANSITION_TIME = 500;

        const hasStateChange = state.dataState !== prevState.dataState && props.dataState === prevProps.dataState;
        const hasPropChange = props.dataState !== state.dataState && prevState.dataState === state.dataState;

        // delay for transition
        const handleOpen = () => {
            setTimeout(() => this.setState({ dataState: OPENED }), TRANSITION_TIME);
        };

        const handleClose = () => {
            setTimeout(() => this.setState({ dataState: CLOSED }), TRANSITION_TIME);
        };

        if (hasStateChange && state.dataState === OPENING) {
            handleOpen();
        } else if (hasPropChange && props.dataState === OPENED) {
            this.setState({ dataState: OPENING }, handleOpen);
        } else if (hasStateChange && state.dataState === CLOSING) {
            handleClose();
        } else if (hasPropChange && props.dataState === CLOSED) {
            this.setState({ dataState: CLOSING }, handleClose);
        }
    }

    toggleModal = () => {
        const { dataState } = this.state;

        if (dataState === Modal.DATA_STATE.CLOSED) {
            this.setState({ dataState: Modal.DATA_STATE.OPENING }, this.props.onOpen); // opening and closing dataStates for scss transitions
        } else if (dataState === Modal.DATA_STATE.OPENED) {
            this.setState({ dataState: Modal.DATA_STATE.CLOSING }, this.props.onClose);
        }
    };

    getChild = (children = [], childName) => {
        const matches = children.filter(child => !!child.type && child.type.displayName === childName);
        return !!matches.length ? matches[0] : null;
    };

    render() {
        const { props, state, toggleModal, getChild } = this;
        const { className = '', disableBackdrop = false, title = '', dataState: dataStateProp, onOpen, ...htmlAtrributes } = props;
        let { children, type = '' } = props;
        const { dataState = '' } = state;

        if (dataState === Modal.DATA_STATE.CLOSED) {
            return null;
        }

        children = React.Children.toArray(children);
        type = !!type.length ? `--${type}` : type;

        const ModalHeaderChild = getChild(children, ModalHeader.displayName);
        const ModalBodyChild = getChild(children, ModalBody.displayName);
        const ModalFooterChild = getChild(children, ModalFooter.displayName);

        const bodyChildren = children.filter(child => {
            if (!child.type) {
                return true;
            }

            const { displayName } = child.type;
            const childDisplayNames = [ModalHeader.displayName, ModalBody.displayName, ModalFooter.displayName];

            return !displayName || !childDisplayNames.includes(displayName);
        });

        return (
            <React.Fragment>
                <aside
                    className={`vdp-modal${type} ${className}`}
                    data-state={dataState.length ? dataState : Modal.DATA_STATE.CLOSED}
                    {...htmlAtrributes}>
                    <div className="vdp-modal__container">
                        {ModalHeaderChild || <Modal.Header>{title}</Modal.Header>}
                        {ModalBodyChild || <Modal.Body>{bodyChildren}</Modal.Body>}
                        {ModalFooterChild || <Modal.Footer onDismiss={toggleModal} />}
                    </div>
                </aside>
                {!disableBackdrop && <Modal.Backdrop dataState={dataState} onClick={toggleModal} />}
            </React.Fragment>
        );
    }
}

export default Modal;
