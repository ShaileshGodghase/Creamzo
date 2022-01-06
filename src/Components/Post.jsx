import React from 'react'
import '../Css/Post.css'

function Post(props) {
    return (
        <>
        <div className="card">
            <div className="card-image" style={{backgroundImage: `url(${props.image}`}}></div>
            <div className="card-text">
                <h2>{props.title}</h2>
                <h4>{props.category}</h4>
                <p>{props.description}</p>
            </div>
            <div className="card-date">
                {props.author}
            </div>
        </div>
        </>
    )
}

export default Post
