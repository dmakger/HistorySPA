import React from 'react';
import clCommon from "./core/styles/_Text40.module.scss";
import TextU from "../core/text/ultra/TextU";

const Text40U = ({className, children, ...props}) => {
    return <TextU className={[className, clCommon.text].join(" ")} {...props}>{children}</TextU>
};

export default Text40U;