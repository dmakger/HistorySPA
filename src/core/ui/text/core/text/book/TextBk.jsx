import React from 'react';

import cl from "./_TextBk.module.scss";
import Text from "../core/text/Text";

const TextBk = ({className, children, ...props}) => {
    return <Text className={[className, cl.text].join(" ")} {...props}>{children}</Text>
};

export default TextBk;