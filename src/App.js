import React, { Component } from 'react';
import { observable, decorate } from 'mobx';
import { observer } from 'mobx-react';

import 'normalize.css';
import './App.css';

import Box from './Box';
import Container from './Container';
import StateReadWriter from './StateReadWriter';

class App extends Component {
    rootElement = {
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

    replaceRoot = (newRootElement) => this.rootElement = newRootElement;

    render() {
        return (
            <div className="App">
                {this.renderElement(this.rootElement)}
                <StateReadWriter
                    rootElement={this.rootElement}
                    replaceRoot={this.replaceRoot}
                />
            </div>
        );
    }
}

decorate(App, {
    rootElement: observable,
});

export default observer(App);
