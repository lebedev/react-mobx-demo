import React, { Component } from 'react';
import './AddButton.css';

class AddButton extends Component {
    render() {
        return (
            <div className="ButtonContainer">
                <div className="FloatingButtons">
                    <button
                        className="ActionButton"
                        onClick={this.props.addBox}
                    >
                        Box
                    </button>
                    <button
                        className="ActionButton"
                        onClick={this.props.addContainer}
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
