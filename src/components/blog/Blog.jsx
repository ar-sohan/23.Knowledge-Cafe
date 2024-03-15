import PropTypes from 'prop-types';

const Blog = ({blog}) => {

    const { title, cover, author_img, author, posted_date, reading_time, hashtags} = blog;

    return (
        <div>
            <figure>
                <img src={cover} alt="" />
            </figure>
            <div className='flex justify-between items-center'>
                <div className='flex'>
                    <div><img className='w-14' src={author_img} alt="" /></div>
                    <div>
                        <h4>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <p>
                    <span>{reading_time} min read </span>
                </p>
            </div>
            <h2>{title}</h2>
            {
                hashtags.map((hashtag , idx) => <span className='mr-5' key={idx}>#{hashtag}</span>)
            }
            <p>Mark as read</p>
        </div>
    );
};

Blog.propTypes = {
    blog : PropTypes.object,
}
export default Blog;