import React from 'react';
import cl from "./_TopTypeDetail.module.scss";
import Text64B from "../../../../../core/ui/text/64/Text64B";
import {getImage} from "../../../../../core/service/image";

const TopTypeDetail = ({wallpaper, title, className, ...props}) => {
    return (
        <div className={[cl.type, className].join(" ")} {...props}>
            <div className={cl.content}>
                <Text64B className={cl.title}>{title}</Text64B>
            </div>
            <div className={cl.background}>
                <img className={cl.backgroundWallpaper} src={getImage(wallpaper)} alt='wallpaper'/>
                <div className={cl.backgroundDark} />
            </div>
        </div>
    );
};

export default TopTypeDetail;