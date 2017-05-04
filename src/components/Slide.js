import React, { Component } from 'react';

export default class Slide extends Component {
    render() {

        return (
            <div>Hello {this.props.name}, {this.props.color}!!</div>
        )
    }
}
