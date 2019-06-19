import React, { Component } from 'react';
import './Container.css';

import AddButton from './AddButton';

class Container extends Component {
    render() {
        return (
            <div className="Container">
                {this.props.children}
                <AddButton />
            </div>
        );
    }
}

export default Container;
