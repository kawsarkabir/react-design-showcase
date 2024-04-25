import Blogs from "./components/Blogs";
import BookmarsBar from "./components/BookmarsBar";
import Header from "./components/Header";
import { useState, useEffect } from "react";

export default function App() {
  const [blogs, setBlogs] = useState([]);
  const [bookmarks, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBookMarks = (blog) => {
    const newBookMarks = [...bookmarks, blog];
    setBookMarks(newBookMarks);
  };
  const handleMarkAsRead = (id, time) => {
    const partInTime = parseInt(time);
    setReadingTime(readingTime + partInTime);
    const remainBookMarks = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookMarks(remainBookMarks);
  };
  return (
    <div className="grid grid-cols-3 justify-items-center gap-5 p-16 mt-8">
      <div className="col-span-2">
        <Header></Header>
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          blogs={blogs}
          handleBookMarks={handleBookMarks}
        ></Blogs>
      </div>
      <div>
        <BookmarsBar
          readingTime={readingTime}
          bookmarks={bookmarks}
        ></BookmarsBar>
      </div>
    </div>
  );
}
