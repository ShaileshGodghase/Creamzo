import React, {useState, useEffect} from 'react'
import axios from "axios";
import Post from './Post'

function Technology() {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        let isMounted = true;

        axios.request('https://creamzo-client-backend.herokuapp.com/posts?category_name=technology')
        .then((response)=>{
            setData(response.data)
        })
        .catch((error)=>{
            console.log(error)
        })

        return () => { isMounted = false };
    },[])
    return (
        <>
        <section className="trending-section" style={{margin: "50px 0"}}>
            <div className="content">
                <div className="trending">
                    <div className="category">
                        <h1>Technology</h1>
                    </div>
                    <section className="post-section">
                        <div className="all-posts">
                            {
                                data.map((item)=>{
                                    return(
                                    <Post 
                                    key={item._id}
                                    title={item.title}
                                    description={item.paragraph}
                                    author={item.author_name}
                                    category={item.category_name}
                                    image={item.image}
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

export default Technology
