import React from 'react';
import clCommon from "./core/styles/_Text32.module.scss";
import TextB from "../core/text/bold/TextB";

const Text32B = ({className, children, ...props}) => {
    return <TextB className={[className, clCommon.text].join(" ")} {...props}>{children}</TextB>
};

export default Text32B;