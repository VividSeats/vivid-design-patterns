import React from 'react';

class StatefulComponent extends React.Component {
    state = {
        ...this.props.initialState
    };

    setComponentState = state => this.setState(state);

    render() {
        const { setComponentState, state } = this;
        return this.props.children({ state, setState: setComponentState });
    }
}

export default StatefulComponent;
