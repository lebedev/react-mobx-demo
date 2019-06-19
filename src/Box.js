import React, { Component, Fragment } from 'react';
import { observer } from 'mobx-react';
import { PhotoshopPicker } from 'react-color';
import './Box.css';

class Box extends Component {
    state = {
        isPickerShown: false,
    };

    newColor = this.props.element.color || 'orange';

    storeNewColor = (newColor) => this.newColor = newColor.hex;

    showPicker = () => this.setState({ isPickerShown: true });

    hidePicker = () => this.setState({ isPickerShown: false });

    changeColor = () => {
        this.hidePicker();
        this.props.changeColor(this.props.element, this.newColor);
    };

    remove = () => this.props.remove(this.props.parent, this.props.element);

    render() {
        return (
            <Fragment>
                {
                    this.state.isPickerShown ? (
                        <div
                            className="PickerOverlay"
                            onClick={this.hidePicker}
                        />
                    ) : null
                }
                <div
                    className="Box"
                    style={{
                        backgroundColor: this.props.element.color || 'orange',
                    }}
                >
                    {
                        this.state.isPickerShown ? (
                            <div className="PickerContainer">
                                <PhotoshopPicker
                                    color={this.props.element.color || 'orange'}
                                    onChangeComplete={this.storeNewColor}
                                    onAccept={this.changeColor}
                                    onCancel={this.hidePicker}
                                />
                            </div>
                        ) : null
                    }
                    <div className="FloatingButtons">
                        <button
                            className="ActionButton"
                            onClick={this.showPicker}
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
            </Fragment>
        );
    }
}

export default observer(Box);
