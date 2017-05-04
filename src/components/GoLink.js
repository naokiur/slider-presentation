import React, { Component } from 'react';

export default class GoLink extends Component {

    render() {
        const linkStyle = {
            color: '#808080',
            fontSize: '120%'
        }

        return (
            <a style={linkStyle} onClick={() => {
                return (
                    alert('go!')
                )
            }}> > </a>
        )
    }
}
