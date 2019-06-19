import React, { Component } from 'react';
import './ContainerButton.css';

class ContainerButton extends Component {
    render() {
        return (
            <div className="ButtonContainer">
                <div className="FloatingButtons">
                    <button
                        className="ActionButton"
                        onClick={this.props.addBox}
                    >
                        Add a Box
                    </button>
                    <button
                        className="ActionButton"
                        onClick={this.props.addContainer}
                    >
                        Add a Container
                    </button>
                    {
                        this.props.remove ? (
                            <button
                                className="ActionButton"
                                onClick={this.props.remove}
                            >
                                Remove
                            </button>
                        ) : null
                    }
                </div>
                <button className="ActionButton">
                    Action
                </button>
            </div>
        );
    }
}

export default ContainerButton;
