import React, { Component } from 'react';
import './Container.css';

class Container extends Component {
    render() {
        return (
            <div className="Container">
                {this.props.children}
                <button
                    className="AddButton"
                >
                    Add
                </button>
            </div>
        );
    }
}

export default Container;
