import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({ bookmarks }) => {   
    return (
        <div className=" bg-slate-200 p-5 h-fit rounded-lg">
            <h1 className="text-xl font-bold">Bookmarked Blogs: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark
                    bookmark={bookmark}
                    key={bookmark.id}
                ></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks : PropTypes.array,
}

export default Bookmarks;