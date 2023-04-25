import React from 'react';
import cl from './_ButtonTo.module.scss'
import {Link} from "react-router-dom";
import clCommon from "../../../../core/styles/_ButtonCore.module.scss"

const ButtonTo = ({to, className, children, ...props}) => {
    return (
        <Link to={to} className={[cl.button, className, clCommon.button].join(" ")} {...props}>{children}</Link>
    );
};

export default ButtonTo;