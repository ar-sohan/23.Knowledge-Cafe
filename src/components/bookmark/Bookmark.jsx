import PropTypes from 'prop-types';

const Bookmark = ( {bookmark} ) => {
    const { title } = bookmark;
    return (
        <div className='m-3 p-3 bg-white rounded-md'>
            <h1> {title}</h1>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark : PropTypes.object,
}
export default Bookmark;