import PropTypes from "prop-types"; // ES6
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddBookMarks, handleMarkAsRead }) => {
  const [blogs, setBlogs] = useState([]);

  // Get data form api using useEffect()
  useEffect(() => {
    const handleData = async () => {
      const res = await fetch("blogs.json");
      const data = await res.json();
      setBlogs(data);
    };
    handleData(); // Every time you need to call the fetch data
  }, []);
  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl mb-3">Blogs</h1>
      <div>
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            handleAddBookMarks={handleAddBookMarks}
            handleMarkAsRead={handleMarkAsRead}
            blog={blog}
          ></Blog>
        ))}
      </div>
    </div>
  );
};

Blogs.propTypes = {
  handleAddBookMarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blogs;
