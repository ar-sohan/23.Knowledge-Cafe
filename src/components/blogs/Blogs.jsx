import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';


const Blogs = ({handleBookmarks, handleReadTime}) => {

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
                        blog={blog}
                        handleBookmarks={handleBookmarks}
                        handleReadTime={handleReadTime}>
                    </Blog>
                )
            }
            </div>
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func,
    handleReadTime: PropTypes.func,
}

export default Blogs;