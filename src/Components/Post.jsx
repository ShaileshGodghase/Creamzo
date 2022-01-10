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
                    <h3>{props.title}</h3>
                    <p>{props.description}</p>
                    {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sit deserunt voluptatem, error laudantium amet suscipit sequi ut! Error labore qui necessitatibus dolores assumenda, nesciunt, distinctio consequuntur ipsa dolorum quasi rem, officiis repellat quisquam animi cupiditate ipsum? Id laudantium obcaecati, cupiditate quo quos magnam vitae ea dignissimos esse sed explicabo placeat, delectus nulla, quam expedita. Asperiores provident repudiandae enim architecto!</p> */}
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
