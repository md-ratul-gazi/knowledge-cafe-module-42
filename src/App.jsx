import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
  // Adding bookMarks data store here
  const [bookMarks, setBookMarks] = useState([]);

  // See reading time
  const [readingTime, setReadingTime] = useState(0);

  // get clicked data and set in setBookMarks state
  const handleAddBookMarks = (blog) => {
    const newBookMarks = [...bookMarks, blog];
    setBookMarks(newBookMarks);
  };

  // get clicked data and set in setReadingTime state
  const handleMarkAsRead = (time, id) => {
    const newTime = readingTime + time;
    setReadingTime(newTime);
    // Remove the read blog  bookMarks
    const remainingBookMarks = bookMarks.filter(
      (bookmark) => bookmark.id !== id
    );
    setBookMarks(remainingBookMarks);
  };
  return (
    <>
      <Header></Header>
      <main className="md:flex max-w-7xl mx-auto">
        <Blogs
          handleMarkAsRead={handleMarkAsRead}
          handleAddBookMarks={handleAddBookMarks}
        ></Blogs>
        <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
      </main>
    </>
  );
}
export default App;
