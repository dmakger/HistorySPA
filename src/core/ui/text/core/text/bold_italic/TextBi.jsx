import React from 'react';

import cl from "./_TextBi.module.scss";
import Text from "../core/text/Text";

const TextBi = ({className, children, ...props}) => {
    return <Text className={[className, cl.text].join(" ")} {...props}>{children}</Text>
};

export default TextBi;