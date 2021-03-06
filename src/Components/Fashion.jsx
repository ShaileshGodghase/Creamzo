import React, {useState, useEffect} from 'react'
import axios from "axios";
import Post from './Post'

function Fashion() {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        let isMounted = true;
    
        axios.request('https://creamzo-filters.herokuapp.com/posts?1')
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
                        <h1>Fashion</h1>
                    </div>
                    <section className="post-section" style={{backgroundColor: "whitesmoke"}}>
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

export default Fashion
