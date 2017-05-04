import React, { Component } from 'react';

export default class SlideRoot extends Component {
    render() {
        const divStyle = {
            color : 'red',
            margin : '5%'
        };

        return (
            <div style={divStyle}>Hello SlideRoot!!</div>
        )
    }
}
