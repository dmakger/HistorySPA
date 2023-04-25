import React from 'react';
import cl from './_PersonListItemEventDetail.module.scss'
import {Link} from "react-router-dom";
import {getPersonURL} from "../../../../../../../../core/service/urls";
import Text16B from "../../../../../../../../core/ui/text/16/Text16B";
import {getShortFullName} from "../../../../../../../../core/service/person";
import {getImage} from "../../../../../../../../core/api/mainAPI";

const PersonListItemEventDetail = ({id, lastname, username, pastname, image, className, ...props}) => {
    const shortName = getShortFullName(lastname, username, pastname)
    return (
        <Link to={getPersonURL(id)} className={[cl.person, className].join(" ")} {...props}>
            <img src={getImage(image)} className={cl.image} alt={`person ${shortName}`} />
            <Text16B className={cl.title}>{shortName}</Text16B>
        </Link>
    );
};

export default PersonListItemEventDetail;