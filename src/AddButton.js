import React, { Component } from 'react';
import './AddButton.css';

class AddButton extends Component {
    render() {
        return (
            <div className="ButtonContainer">
                <div className="FloatingButtons">
                    <button
                        className="ActionButton"
                    >
                        Box
                    </button>
                    <button
                        className="ActionButton"
                    >
                        Container
                    </button>
                </div>
                <button className="ActionButton">
                    Add
                </button>
            </div>
        );
    }
}

export default AddButton;
