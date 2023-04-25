import React from 'react';
import cl from './_TypeDetailList.module.scss'
import TypeDetailListItem from "./core/item/TypeDetailListItem";

const TypeDetailList = ({list, className, ...props}) => {
    return (
        <div className={[className, cl.list].join(" ")} {...props}>
            {list.map(item => (
                <TypeDetailListItem key={item.id}
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    description={item.description} />
            ))}
        </div>
    );
};

export default TypeDetailList;