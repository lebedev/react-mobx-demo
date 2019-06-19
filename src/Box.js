import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './Box.css';

class Box extends Component {
    handleClick = () => this.props.changeColor(this.props.element);

    render() {
        return (
            <div
                className="Box"
                style={{
                    backgroundColor: this.props.element.color || 'orange',
                }}
                onClick={this.handleClick}
            />
        );
    }
}

export default observer(Box);
