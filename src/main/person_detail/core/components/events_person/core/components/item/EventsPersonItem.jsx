import React from 'react';
import {getEventURL} from "../../../../../../../../core/service/urls";
import cl from "./_EventsPersonItem.module.scss";
import {getImage} from "../../../../../../../../core/api/mainAPI";
import {Link} from "react-router-dom";
import Text28B from "../../../../../../../../core/ui/text/28/Text28B";

const EventsPersonItem = ({id, image, title, className, ...props}) => {
    return (
        <Link to={getEventURL(id)} className={[cl.event, className].join(" ")} {...props}>
            <img src={getImage(image)} className={cl.image} alt={`event ${title}`} />
            <Text28B className={cl.title}>{title}</Text28B>
        </Link>
    );
};

export default EventsPersonItem;