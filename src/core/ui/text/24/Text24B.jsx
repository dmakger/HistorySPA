import React from 'react';
import clCommon from "./core/styles/_Text24.module.scss";
import TextB from "../core/text/bold/TextB";

const Text24B = ({className, children, ...props}) => {
    return <TextB className={[className, clCommon.text].join(" ")} {...props}>{children}</TextB>
};

export default Text24B;