import React from 'react';
import clCommon from "./core/styles/_Text40.module.scss";
import TextB from "../core/text/bold/TextB";

const Text40B = ({className, children, ...props}) => {
    return <TextB className={[className, clCommon.text].join(" ")} {...props}>{children}</TextB>
};

export default Text40B;