import React from 'react';
import clCommon from "./core/styles/_Text32.module.scss";
import TextBk from "../core/text/book/TextBk";

const Text32Bk = ({className, children, ...props}) => {
    return <TextBk className={[className, clCommon.text].join(" ")} {...props}>{children}</TextBk>
};

export default Text32Bk;