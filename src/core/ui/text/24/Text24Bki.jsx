import React from 'react';
import clCommon from "./core/styles/_Text24.module.scss";
import TextBki from "../core/text/book_italic/TextBki";

const Text24B = ({className, children, ...props}) => {
    return <TextBki className={[className, clCommon.text].join(" ")} {...props}>{children}</TextBki>
};

export default Text24B;