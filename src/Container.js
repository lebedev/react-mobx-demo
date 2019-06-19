import React, { Component } from 'react';
import './Container.css';

import ContainerButton from './ContainerButton';

class Container extends Component {
    addBox = () => this.props.addElement(this.props.element, 'box');

    addContainer = () => this.props.addElement(this.props.element, 'container');

    remove = this.props.parent ? () => this.props.remove(this.props.parent, this.props.element) : undefined;

    render() {
        return (
            <div className="Container">
                {this.props.children}
                <ContainerButton
                    addBox={this.addBox}
                    addContainer={this.addContainer}
                    remove={this.remove}
                />
            </div>
        );
    }
}

export default Container;
