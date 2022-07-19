import React, {LegacyRef} from 'react';
import './Send_post.css'

export function Send_post() {

    let newPostElement: any | undefined = React.createRef();

    const onClickHandler = () => {
        let text = newPostElement.current.value
        console.log(text)
    }

    return (
        <div className="write">
            <h3>My posts</h3>
            <textarea ref={newPostElement} placeholder='your news...'></textarea>
            <button onClick={onClickHandler}>Send</button>
        </div>
    )
}