import React from 'react';
import cl from './_Text.module.scss'

const Text = ({className, children, ...props}) => {
    return <span className={[className, cl.text].join(" ")} {...props}>{children}</span>
};

export default Text;