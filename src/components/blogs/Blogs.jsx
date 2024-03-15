import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";


const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    
    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    } , [])

    return (
        <div>
            <div>
            {
                blogs.map(blog => 
                    <Blog
                        key={blog.id}
                        blog={blog}>
                    </Blog>
                )
            }
            </div>
        </div>
    );
};

export default Blogs;