import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
    render() {
        return (
            <div
                className="Box"
                style={{
                    backgroundColor: this.props.element.color || 'orange',
                }}
            />
        );
    }
}

export default Box;
