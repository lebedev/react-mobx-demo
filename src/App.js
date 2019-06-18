import React, { Component } from 'react';
import 'normalize.css';
import './App.css';

import Box from './Box';
import Container from './Container';
import StateReadWriter from './StateReadWriter';

class App extends Component {
    state = {
        type: 'container',
        items: [],
    };

    renderElement = (element, index = 0) => {
        switch (element.type) {
            case 'container': return (
                <Container key={index}>
                    {element.items.map(this.renderElement)}
                </Container>
            );

            case 'box': return (
                <Box
                    key={index}
                    element={element}
                />
            );

            default:
                throw new Error('This should\'ve never happened.');
        }
    };

    writeState = (newState) => this.setState(newState);

    render() {
        return (
            <div className="App">
                {this.renderElement(this.state)}
                <StateReadWriter
                    state={this.state}
                    writeState={this.writeState}
                />
            </div>
        );
    }
}

export default App;
