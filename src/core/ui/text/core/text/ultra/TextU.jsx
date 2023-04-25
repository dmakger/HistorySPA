import React from 'react';

import cl from "./_TextU.module.scss";
import Text from "../core/text/Text";

const TextU = ({className, children, ...props}) => {
    return <Text className={[className, cl.text].join(" ")} {...props}>{children}</Text>
};

export default TextU;