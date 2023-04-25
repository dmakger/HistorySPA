import React, {Component} from 'react';
import cl from './_MainPage.module.scss'
import {MainPageWrapperContext} from "../core/wrapper/core/context/MainPageWrapperContext";
import {getTypes} from "../core/api/typeAPI";
import TypeList from "./core/components/type_list/TypeList";
import Text64B from "../../core/ui/text/64/Text64B";

class MainPage extends Component {
    static contextType = MainPageWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            types: {},
            error: false,
            isLoad: false,
        }
    }

    componentDidMount() {
        this._setData()
    }

    _setData() {
        this._setTypes()
    }

    _setTypes() {
        getTypes().then(
            r => {
                this.setState({types: r, isLoad: true})
            },
            e => {this.setState({error: true, isLoad: true})}
        )
    }

    render() {
        const {types, isLoad} = this.state;
        let content = null
        if (isLoad) {
            if (types.length !== 0) {
                content = (
                    <TypeList list={types} className={cl.types}/>
                )
            }
        }
        return (
            <div>
                <div className={cl.top}>
                    <Text64B className={cl.title}>Великая Отечественная война</Text64B>
                    <div className={cl.line} />
                </div>
                {content}
            </div>
        );
    }
}

export default MainPage;