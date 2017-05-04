import React, { Component } from 'react';
import Slide from './Slide.js'
import GoLink from './GoLink'

export default class SlideRoot extends Component {

    render() {
        const data = [
            {name: 'aaa', color: 'white'},
            {name: 'bbb', color: 'black'}

        ];

        const divStyle = {
            margin : '5%'
        };

        return (
            <div style={divStyle}>
                Hello SlideRoot!!
                <GoLink />
                {
                    data.map((d) => (
                        <Slide name={d.name} color={d.color} />
                    ))
                }
            </div>
        )
    }
}
