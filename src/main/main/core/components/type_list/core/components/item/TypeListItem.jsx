import React from 'react';
import cl from './_TypeListItem.module.scss'
import {getImage} from "../../../../../../../../core/service/image";
import Text64B from "../../../../../../../../core/ui/text/64/Text64B";
import {Link} from "react-router-dom";
import {getTypeURL} from "../../../../../../../../core/service/urls";

const TypeListItem = ({id, wallpaper, title, className, ...props}) => {
    return (
        <Link to={getTypeURL(id)} className={[cl.type, className].join(" ")} {...props}>
            <div className={cl.content}>
                <Text64B className={cl.title}>{title}</Text64B>
            </div>
            <div className={cl.background}>
                <img className={cl.backgroundWallpaper} src={getImage(wallpaper)} alt='wallpaper'/>
                <div className={cl.backgroundDark} />
            </div>
        </Link>
    );
};

export default TypeListItem;