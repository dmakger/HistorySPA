import React from 'react';

import cl from "./_TextBki.module.scss";
import Text from "../core/text/Text";

const TextBki = ({className, children, ...props}) => {
    return <Text className={[className, cl.text].join(" ")} {...props}>{children}</Text>
};

export default TextBki;