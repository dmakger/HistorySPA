import React from 'react';
import ButtonTo from "../../../../core/ui/button/ButtonTo";

const ButtonToDefault = ({to, className, children, ...props}) => {
    return (
        <ButtonTo to={to} className={className} {...props}>{children}</ButtonTo>
    );
};

export default ButtonToDefault;