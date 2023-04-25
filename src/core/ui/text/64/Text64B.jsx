import React from 'react';
import clCommon from "./core/styles/_Text64.module.scss";
import TextB from "../core/text/bold/TextB";

const Text64B = ({className, children, ...props}) => {
    return <TextB className={[className, clCommon.text].join(" ")} {...props}>{children}</TextB>
};

export default Text64B;