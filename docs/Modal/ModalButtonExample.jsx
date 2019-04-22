import React from 'react';

import BodyText from '../../src/components/atoms/BodyText';
import Modal from '../../src/components/molecules/Modal';
import Button from '../../src/components/atoms/Button';
import Headline from '../../src/components/atoms/Headline';

class ModalButtonExample extends React.Component {
    state = {
        opened: false
    };

    onClick = opened => {
        this.setState({ opened });
    };

    render() {
        const { state, onClick } = this;

        return (
            <React.Fragment>
                <Button onClick={() => onClick(true)}>Click</Button>
                <Modal dataState={!!state.opened ? 'opened' : 'closed'}>
                    <Modal.Header>
                        <Headline importance={6}>Modal Header</Headline>
                    </Modal.Header>
                    <Modal.Body>
                        <BodyText importance={2}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum.
                        </BodyText>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button muted importance="text" onClick={() => onClick(false)}>
                            Dismiss
                        </Button>
                        <Button importance="text" onClick={() => onClick(false)}>
                            Confirm
                        </Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ModalButtonExample;
