import React, { Component } from 'react';

export default class Slide extends Component {
    constructor() {
        super();
        this.state = {
            hidden: true
        };
    }

    render() {
        const slideStyle = this.state.hidden ? {display: 'none'} : {};

        return (
            <div style={slideStyle}>Hello {this.props.name}, {this.props.color}!!</div>
        )
    }
}
