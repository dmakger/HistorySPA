import React from 'react';
import clCommon from "./core/styles/_Text28.module.scss";
import TextB from "../core/text/bold/TextB";

const Text28B = ({className, children, ...props}) => {
    return <TextB className={[className, clCommon.text].join(" ")} {...props}>{children}</TextB>
};

export default Text28B;