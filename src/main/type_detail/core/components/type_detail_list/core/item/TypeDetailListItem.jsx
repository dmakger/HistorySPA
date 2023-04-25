import React from 'react';
import cl from './_TypeDetailListItem.module.scss'
import {Link} from "react-router-dom";
import {getEventURL} from "../../../../../../../core/service/urls";
import {getImage} from "../../../../../../../core/api/mainAPI";
import Text16B from "../../../../../../../core/ui/text/16/Text16B";
import Text28B from "../../../../../../../core/ui/text/28/Text28B";

const TypeDetailListItem = ({id, title, image, description, className, ...props}) => {
    return (
        <Link to={getEventURL(id)} className={[cl.item, className].join(" ")} {...props}>
            <img src={getImage(image)} alt={'image ' + title} className={cl.image}/>
            <Text28B className={cl.title}>{title}</Text28B>
            <Text16B className={cl.description}>{description}</Text16B>
        </Link>
    );
};

export default TypeDetailListItem;