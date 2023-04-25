import React from 'react';
import cl from "./_TopBar.module.scss";
import Logo from "../../../../../../core/ui/logo/mini/Logo";
import {Link} from "react-router-dom";
import {MAIN_URL} from "../../../../../../core/service/urls";


const TopBar = ({menu, activeId, className, ...props}) => {
    return (
        <Link to={MAIN_URL} className={[cl.topBar, className].join(" ")} {...props}>
            <Logo classNameTitle={cl.title} />
        </Link>
    );
};

export default TopBar;