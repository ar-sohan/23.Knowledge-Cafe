import './App.css'
import Blogs from './components/blogs/Blogs'
import Bookmark from './components/bookmark/Bookmark'
import Header from './components/header/Header'

function App() {

  return (
    <>
      <Header></Header>
      <div className='w-3/4 mx-auto text-[#11111126]'>
      <hr />
      </div>
      <div className='flex gap-10 lg:my-12 lg:mx-24'>
        <Blogs></Blogs>
        <Bookmark></Bookmark>
      </div>
    </>
  )
}

export default App
