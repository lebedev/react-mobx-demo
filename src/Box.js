import React, { Component } from 'react';
import { observer } from 'mobx-react';
import './Box.css';

class Box extends Component {
    changeColor = () => this.props.changeColor(this.props.element);

    remove = () => this.props.remove(this.props.parent, this.props.element);

    render() {
        return (
            <div
                className="Box"
                style={{
                    backgroundColor: this.props.element.color || 'orange',
                }}
            >
                <div className="FloatingButtons">
                    <button
                        className="ActionButton"
                        onClick={this.changeColor}
                    >
                        Change Color
                    </button>
                    {
                        this.props.parent ? (
                            <button
                                className="ActionButton"
                                onClick={this.remove}
                            >
                                Remove
                            </button>
                        ) : null
                    }
                </div>
            </div>
        );
    }
}

export default observer(Box);
