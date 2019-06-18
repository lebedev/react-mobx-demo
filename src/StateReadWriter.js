import React, { createRef, Fragment, Component } from 'react';
import './StateReadWriter.css';

class StateReadWriter extends Component {
    state = {
        stringifiedState: '',
    };

    stateInput = createRef();

    stringifyCurrentState = () => this.setState({ stringifiedState: JSON.stringify(this.props.state) });

    parseNewState = () => {
        const { current } = this.stateInput;

        if (current) {
            this.props.writeState(JSON.parse(current.value));
            current.value = '';
        }
    };

    render() {
        return (
            <Fragment>
                <div>
                    <input ref={this.stateInput} type="text" />
                    <button onClick={this.parseNewState}>
                        Build
                    </button>
                </div>
                <div>
                    <input type="text" readOnly="readonly" value={this.state.stringifiedState} className="ReadInput"/>
                    <button onClick={this.stringifyCurrentState}>
                        Create JSON
                    </button>
                </div>
            </Fragment>
        );
    }
}

export default StateReadWriter;