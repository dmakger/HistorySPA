import React from 'react';
import cl from './_Logo.module.scss'
import {Link} from "react-router-dom";
import {MAIN_URL} from "../../../service/urls";
import Text40U from "../../text/40/Text40U";

const Logo = ({className, classNameTitle, ...props}) => {
    return (
        <Link to={MAIN_URL} className={className} {...props}>
            <Text40U className={[cl.title, classNameTitle].join(" ")}>.bruh.</Text40U>
        </Link>
    );
};

export default Logo;