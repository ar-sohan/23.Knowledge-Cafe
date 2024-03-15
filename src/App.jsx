import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmark from './components/bookmarks/Bookmarks'
import Header from './components/header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [markRead, setMarkRead] = useState(0);

  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  const handleReadTime = (reading_time, id) => {
    setMarkRead(markRead + reading_time);
    const remainingBookmarks = bookmarks.filter(bookMark => bookMark.id !== id);
    setBookmarks(remainingBookmarks);
  }

  return (
    <div>
      <Header></Header>
      <div className='w-3/4 mx-auto text-[#11111126]'>
      <hr />
      </div>
      <div className='flex items-start gap-0 lg:my-12 lg:mx-12'>
        <div className='w-5/6'>
          <Blogs
            handleBookmarks={handleBookmarks}
            handleReadTime={handleReadTime}
          ></Blogs>
        </div>
        <div className='w-2/6'>
          <div className='p-3 mb-3 rounded-md bg-indigo-100'>
            <h1 className='text-[#6047EC] text-xl font-bold'>Spent Time on Read: {markRead} min</h1>
          </div>
          <Bookmark bookmarks={bookmarks}></Bookmark>
        </div>
      </div>
    </div>
  )
}

export default App
