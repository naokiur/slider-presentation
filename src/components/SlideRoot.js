import React, { Component } from 'react';
import Slide from './Slide.js'

export default class SlideRoot extends Component {

    render() {
        const data = [
            {name: 'aaa', color: 'white'},
            {name: 'bbb', color: 'black'}

        ];

        const divStyle = {
            color : 'red',
            margin : '5%'
        };

        return (
            <div style={divStyle}>
                {
                    data.map((d) => (
                        <Slide name={d.name} color={d.color} />
                    ))
                }

                Hello SlideRoot!!</div>
        )
    }
}
