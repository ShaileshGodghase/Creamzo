import React, {useState, useEffect} from 'react'
import axios from "axios";
import Post from './Post'

function Entertainment() {
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        axios.request('https://creamzo-filters.herokuapp.com/posts?category_id=2')
        .then((response)=>{
            setData(response.contents)
            console.log(response)
        })
        .catch((error)=>{
            console.log(error)
        })
    },[data])
    return (
        <>
        <section className="trending-section" style={{margin: "50px 0"}}>
            <div className="content">
                <div className="trending">
                    <div className="category">
                        <h1>Entertainment</h1>
                    </div>
                    <section className="post-section" style={{backgroundColor: "whitesmoke"}}>
                        <div className="all-posts">
                            {
                                data.map((item)=>{
                                    return(
                                    <Post 
                                    key={item._id}
                                    title={item.title}
                                    description={item.contents[0].content_body}
                                    date="date"
                                    category={item.category_name}
                                    image={item.contents[1].content_body}
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

export default Entertainment
