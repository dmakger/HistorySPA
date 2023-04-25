import React from 'react';
import cl from './_PersonListEventDetail.module.scss'
import PersonListItemEventDetail from "./core/components/item/PersonListItemEventDetail";
import Text32B from "../../../../../core/ui/text/32/Text32B";

const PersonListEventDetail = ({list, className, ...props}) => {
    return (
        <div className={[className, cl.block].join(" ")} {...props}>
            <Text32B className={cl.title}>Известные личности события</Text32B>
            <div className={cl.list}>
                {list.map(item => (
                    <PersonListItemEventDetail key={item.id}
                                               id={item.id}
                                               lastname={item.lastname}
                                               username={item.username}
                                               pastname={item.pastname}
                                               image={item.image}
                                               className={cl.listItem}/>
                ))}
            </div>
        </div>
    );
};

export default PersonListEventDetail;