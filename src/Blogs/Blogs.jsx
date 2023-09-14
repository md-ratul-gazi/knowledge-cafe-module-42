import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
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
  return <div></div>;
};

export default Blogs;
