import React from 'react';
import cl from "./_ButtonToDefault20B.module.scss"
import clCommon from "../../../core/styles/_ButtonCore.module.scss"
import ButtonToDefault from "../core/ui/button/ButtonToDefault";
import Text20B from "../../../../text/20/Text20B";

const ButtonToDefault20B = ({className, children, ...props}) => {
    return (
        <ButtonToDefault className={[className, cl.button].join(" ")} {...props}>
            <Text20B className={clCommon.title}>{children}</Text20B>
        </ButtonToDefault>
    )
};

export default ButtonToDefault20B;