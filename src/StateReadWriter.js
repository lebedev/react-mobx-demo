import React, { createRef, Fragment, Component } from 'react';
import './StateReadWriter.css';

import validateState from './validate';

class StateReadWriter extends Component {
    state = {
        stringifiedState: '',
    };

    stateInput = createRef();

    stringifyCurrentState = () => this.setState({ stringifiedState: JSON.stringify(this.props.rootElement) });

    parseNewState = () => {
        const { current } = this.stateInput;

        if (current) {
            try {
                const newState = JSON.parse(current.value);

                validateState(newState);

                this.props.replaceRoot(newState);
                current.value = '';
            } catch (e) {
                alert(e);
            }
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
