import React from 'react';
import cl from './_EventsPerson.module.scss'
import Text40B from "../../../../../core/ui/text/40/Text40B";
import EventsPersonItem from "./core/components/item/EventsPersonItem";


const EventsPerson = ({list, className, ...props}) => {
    return (
        <div className={[className].join(" ")} {...props}>
            <Text40B>Связан со следующими событиями</Text40B>
            <div className={cl.list}>
                {list.map(item => (
                    <EventsPersonItem key={item.id}
                                      id={item.id}
                                      image={item.image}
                                      title={item.title}
                                      className={cl.event}/>
                ))}
            </div>
        </div>
    );
};

export default EventsPerson;