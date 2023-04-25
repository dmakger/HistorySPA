import React, {Component} from 'react';
import {MainPageWrapperContext} from "../core/wrapper/core/context/MainPageWrapperContext";
import {getDetailPerson} from "../core/api/personAPI";
import {withParams} from "../../core/service/params";
import Text64B from "../../core/ui/text/64/Text64B";
import cl from "./_PersonDetailPage.module.scss";
import {getImage} from "../../core/api/mainAPI";
import {getFullName, getGapDate, getShortFullName} from "../../core/service/person";
import Text36B from "../../core/ui/text/36/Text36B";
import Text24Bk from "../../core/ui/text/24/Text24Bk";
import EventsPerson from "./core/components/events_person/EventsPerson";

class PersonDetailPage extends Component {
    static contextType = MainPageWrapperContext;

    constructor(props) {
        super(props);
        this.state = {
            lastname: null,
            username: null,
            pastname: null,
            description: null,
            events: [],
            image: null,
            date_birth: null,
            date_death: null,
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
        getDetailPerson(this.props.params.path).then(
            r => {
                this.setState({
                    lastname: r.lastname,
                    username: r.username,
                    pastname: r.pastname,
                    description: r.description,
                    events: r.events,
                    image: r.image,
                    date_birth: r.date_birth,
                    date_death: r.date_death,
                    isLoad: true,
                })
                console.log(r)
            },
            e => {this.setState({error: true, isLoad: true})}
        )
    }

    render() {
        const {lastname, username, pastname, description, events, image, date_birth, date_death, isLoad} = this.state;
        let data = null
        if (isLoad) {
            data = (
                <div className={cl.page}>
                    <div className={cl.main}>
                        <img className={cl.image} src={getImage(image)} alt={`person ${getShortFullName(lastname, username, pastname)}`}/>
                        <div className={cl.text}>
                            <Text64B className={cl.title}>{getFullName(lastname, username, pastname)}</Text64B>
                            <Text36B className={cl.date}>{getGapDate(date_birth, date_death)}</Text36B>
                            <Text24Bk className={cl.description}>{description}</Text24Bk>
                        </div>
                    </div>
                    <EventsPerson list={events} className={cl.events} />

                </div>
            )
        }
        return (
            <>
                {data}
            </>
        );
    }
}

export default withParams(PersonDetailPage);