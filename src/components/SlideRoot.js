import React, { Component } from 'react';
import Slide from './Slide.js'

export default class SlideRoot extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    render() {
        const data = [

        ];

        const divStyle = {
            margin : '5%'
        };

        const linkStyle = {
            color: '#808080',
            fontSize: '120%'
        }

        return (
            <div style={divStyle}>
                <a style={linkStyle} onClick={() => {
                    this.setState({count: this.state.count + 1});
                }}> > </a>
                {
                    data.map((d, number) => {
                        const isDisplay = number === this.state.count ? 'true' : 'false';
                        return (
                            <Slide title={d.title} contents={d.contents} isDisplay={isDisplay} />
                        );
                    })
                }
            </div>
        )
    }
}
