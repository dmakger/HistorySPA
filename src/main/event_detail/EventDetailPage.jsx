import React, {Component} from 'react';
import cl from './_EventDetailPage.module.scss'
import {withParams} from "../../core/service/params";
import {MainPageWrapperContext} from "../core/wrapper/core/context/MainPageWrapperContext";
import {getDetailEvent} from "../core/api/eventAPI";
import Text64B from "../../core/ui/text/64/Text64B";
import Text24Bki from "../../core/ui/text/24/Text24Bki";
import PersonListEventDetail from "./core/components/person/PersonListEventDetail";
import LetterEvent from "./core/components/letter/LetterEvent";

class EventDetailPage extends Component {
    static contextType = MainPageWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            title: null,
            description: null,
            persons: [],
            content: '',
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
        getDetailEvent(this.props.params.path).then(
            r => {
                this.setState({
                    title: r.title,
                    description: r.description,
                    persons: r.persons,
                    content: r.content,
                    isLoad: true
                })
                console.log(r)
            },
            e => {this.setState({error: true, isLoad: true})}
        )
    }

    render() {
        const {title, description, persons, content, isLoad} = this.state;
        let data = null
        if (isLoad) {
            data = (
                <>
                    <Text64B className={cl.title}>{title}</Text64B>
                    <Text24Bki className={cl.description}>{description}</Text24Bki>
                    <PersonListEventDetail list={persons} className={cl.persons} />
                    <LetterEvent content={content} className={cl.content} />
                </>
            )
        }
        return (
            <div className={cl.page}>
                {data}
            </div>
        );
    }
}

export default withParams(EventDetailPage);