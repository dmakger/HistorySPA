import React from 'react';

import cl from "./_TextB.module.scss";
import Text from "../core/text/Text";

const TextB = ({className, children, ...props}) => {
    return <Text className={[className, cl.text].join(" ")} {...props}>{children}</Text>
};

export default TextB;