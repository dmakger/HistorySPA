import React from 'react';
import clCommon from "./core/styles/_Text24.module.scss";
import TextBi from "../core/text/bold_italic/TextBi";

const Text24B = ({className, children, ...props}) => {
    return <TextBi className={[className, clCommon.text].join(" ")} {...props}>{children}</TextBi>
};

export default Text24B;