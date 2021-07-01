import React from 'react';

import './Post.css';

const post = (props) => (
    <article className="Post">
        {props.title}
        <div className="Info">
            <div className="Author">{props.author}</div>
        </div>
    </article>
);

export default post;