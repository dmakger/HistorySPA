import React from 'react';
import cl from './_LetterEvent.module.scss'

const LetterEvent = ({content, className, ...props}) => {
    console.log(content)
    return (
        <div className={[className, cl.text].join(" ")} {...props} dangerouslySetInnerHTML={{ __html: content }}>
            {/*{content}*/}
        </div>
    );
};

export default LetterEvent;