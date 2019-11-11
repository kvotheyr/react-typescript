import React from 'react';

interface Iprops {
    title: string,
    body: string
}

function Tweet({title, body}: Iprops){
    return(
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
            <h3>Likes: 30</h3>
        </div>
    );
}

export default Tweet;