import React, { Component } from 'react';
import './Container.css';

import ContainerButton from './ContainerButton';

class Container extends Component {
    addBox = () => this.props.addElement(this.props.element, 'box');

    addContainer = () => this.props.addElement(this.props.element, 'container');

    render() {
        return (
            <div className="Container">
                {this.props.children}
                <ContainerButton
                    addBox={this.addBox}
                    addContainer={this.addContainer}
                />
            </div>
        );
    }
}

export default Container;
