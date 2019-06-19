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

    addElement = (targetElement, type) => {
        targetElement.items.push(
            type === 'box' ? {
                type: 'box'
            } : {
                type: 'container',
                items: [],
            }
        );
    };

    changeBoxColor = (box) => {
        switch (box.color) {
            case 'yellow': box.color = 'green'; break;
            case 'green': box.color = 'dodgerblue'; break;
            case 'dodgerblue': box.color = 'blue'; break;
            case 'blue': box.color = 'purple'; break;
            case 'purple': box.color = 'red'; break;
            case 'red': box.color = 'orange'; break;
            default: box.color = 'yellow'; break;
        }
    };

    remove = (parent, element) => {
        parent.items.splice(parent.items.indexOf(element), 1);
    };

    renderElement = (element, index = 0, parent) => {
        switch (element.type) {
            case 'container': return (
                <Container
                    key={index}
                    element={element}
                    parent={parent}
                    addElement={this.addElement}
                    remove={this.remove}
                >
                    {element.items.map((child, index) => this.renderElement(child, index, element))}
                </Container>
            );

            case 'box': return (
                <Box
                    key={index}
                    element={element}
                    parent={parent}
                    changeColor={this.changeBoxColor}
                    remove={this.remove}
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
