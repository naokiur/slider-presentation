import React, { Component } from 'react';

export default class Slide extends Component {
    constructor() {
        super();
        this.state = {
            hidden: false
        };
    }

    render() {
        const titleStyle = {
            fontSize: '200%'
        }

        const slideStyle = this.props.isDisplay === 'true' ? {} : {display: 'none'};

        return (
            <div style={slideStyle}>
                <p style={titleStyle}>■ {this.props.title}</p>
                {this.props.contents.map((c) => {
                    return (
                        <p>{c}</p>
                    )
                })}
            </div>
        )
    }
}
