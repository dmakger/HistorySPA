import React from 'react';
import cl from './_Page404.module.scss'
// import ButtonToDefault20B from "../core/ui/button/to/default/20/ButtonToDefault20B";
import Text36B from "../core/ui/text/36/Text36B";
import Text64B from "../core/ui/text/64/Text64B";
import Text24Bk from "../core/ui/text/24/Text24Bk";
import ButtonToDefault20B from "../core/ui/button/to/default/20/ButtonToDefault20B";

const Page404 = () => {
    return (
        <div className={cl.page}>
            <div className={cl.text}>
                <Text36B>(×_×)</Text36B>
                <Text64B className={cl.title}>404.</Text64B>
                <Text24Bk>Такой страницы не существует :(</Text24Bk>
            </div>
            <ButtonToDefault20B to={'/'}>Вернуться на главную страницу</ButtonToDefault20B>
        </div>
    );
};

export default Page404;