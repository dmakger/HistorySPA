import React, {Component} from 'react';
import cl from './_TypeDetailPage.module.scss'
import {MainPageWrapperContext} from "../core/wrapper/core/context/MainPageWrapperContext";
import {getDetailType} from "../core/api/typeAPI";
import {withParams} from "../../core/service/params";
import TopTypeDetail from "./core/components/top/TopTypeDetail";
import TypeDetailList from "./core/components/type_detail_list/TypeDetailList";


class TypeDetailPage extends Component {
    static contextType = MainPageWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            wallpaper: null,
            content: {},
            error: false,
            isLoad: false,
        }
    }

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this._setContent()
    }

    _setContent() {
        getDetailType(this.props.params.path).then(
            r => {
                this.setState({
                    title: r.title,
                    wallpaper: r.wallpaper,
                    content: r.content,
                    isLoad: true
                })
            },
            e => {this.setState({error: true, isLoad: true})}
        )
    }

    render() {
        const {title, wallpaper, content, isLoad} = this.state;
        let data = null
        if (isLoad) {
            data = (
                <>
                    <TopTypeDetail title={title} wallpaper={wallpaper} />
                    <div className={cl.content}>
                        <TypeDetailList list={content} />
                    </div>
                </>
            )
        }
        return (
            <div>
                {data}
            </div>
        );
    }
}

export default withParams(TypeDetailPage);