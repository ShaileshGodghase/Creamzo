import React from 'react'
import '../Css/Post.css'

function Post(props) {
    return (
        <>
        <div className="card">
            <div className="card-image" style={{backgroundImage: `url(${props.image}`}}></div>
            <div className="text-content">
                <div className="card-text">
                    <h4 style={{textAlign:"center",textTransform:"uppercase"}}>{props.category}</h4>
                    <h2>{props.title}</h2>
                    <p>{props.description}</p>
                </div>
                <div className="card-date">
                    <p>{props.author}</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default Post
