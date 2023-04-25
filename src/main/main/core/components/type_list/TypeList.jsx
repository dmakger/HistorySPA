import React from 'react';
import cl from './_TypeList.module.scss'
import TypeListItem from "./core/components/item/TypeListItem";

const TypeList = ({list, className, ...props}) => {
    return (
        <div className={[cl.list, className].join(" ")} {...props}>
            {list.map(item => (
                <TypeListItem id={item.id}
                              key={item.id}
                              wallpaper={item.wallpaper}
                              title={item.title}
                              className={cl.item} />
            ))}
        </div>
    );
};

export default TypeList;