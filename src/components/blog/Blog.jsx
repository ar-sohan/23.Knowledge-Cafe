import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";

const Blog = ({blog, handleBookmarks, handleReadTime}) => {

    const {id, title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;

    return (
        <div className='space-y-5 my-5'>
            <figure>
                <img className='w-[85%] object-cover rounded-lg' src={cover} alt="" />
            </figure>
            <div className='flex justify-between items-center w-[85%]'>
                <div className='flex items-center gap-3'>
                    <div><img className='w-14' src={author_img} alt="" /></div>
                    <div>
                        <h4>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <p className='flex gap-3 items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleBookmarks(blog)}><CiBookmark></CiBookmark></button>
                </p>
            </div>
            <h2 className='text-3xl font-bold'>{title}</h2>
            {
                hashtags.map((hashtag , idx) => <span className='mr-5' key={idx}>#{hashtag}</span>)
            }
            <div>
            <button onClick={() => handleReadTime(reading_time, id)} className='text-blue-600 underline font-bold'>Mark as read</button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object,
    handleBookmarks: PropTypes.func,
    handleReadTime: PropTypes.func,
}
export default Blog;