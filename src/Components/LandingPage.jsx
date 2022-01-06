import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from './Post'

function LandingPage() {

    const [data, setData] = useState([]);
    
    useEffect(()=>{
        let isMounted = true;
        axios.request('https://creamzo-filters.herokuapp.com/trendingposts/1')
        .then((response)=>{
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })
        return () => { isMounted = false };
    })
    return (
        <>
        <section className="trending-section" style={{margin: "50px 0"}}>
            <div className="content">
                <div className="trending">
                    <div className="category">
                        <h1>Trending Posts</h1>
                    </div>
                    <section className="post-section" style={{backgroundColor: "whitesmoke"}}>
                        <div className="all-posts">
                            {
                                data.map((item,index)=>{
                                    return(
                                    <Post 
                                    key={item._id}
                                    title={item.title}
                                    description={item.contents[0].content_body}
                                    author={item.author_name}
                                    category={item.category_name}
                                    image={item.contents[2].content_body}
                                    />
                                    )
                                })
                            }
                        </div>
                    </section>
                </div>
            </div>
        </section>
        </>
    )
}

export default LandingPage
