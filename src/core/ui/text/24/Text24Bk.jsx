import React from 'react';
import clCommon from "./core/styles/_Text24.module.scss";
import TextBk from "../core/text/book/TextBk";

const Text24B = ({className, children, ...props}) => {
    return <TextBk className={[className, clCommon.text].join(" ")} {...props}>{children}</TextBk>
};

export default Text24B;