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
                {title: '今日やったこと', contents: ['Naoki Shimura (Github: naokiur)']},
                {title: '自己紹介', contents: ['SIerです。お客様先に常駐して、QA回答おじさんやっています。', 'フロントエンドは、jQueryで止まってしまっているので、更新したくて参加致しました。']},
                {title: 'できたこと', contents: ['Reactプロジェクトの作り方', 'コンポーネントの作り方', 'stateの変更の仕方', 'Reactライフサイクルの一つ(stateを変更すると、当該コンポーネントが再描画される)']},
                {title: 'できなかったこと', contents: ['親コンポーネントのstate変更時の、子コンポーネントstate変更の仕方','(そもそも、コンポーネントの分け方がよくない？)']},
                {title: '成果物', contents: ['このスライド描画アプリです。']}
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
