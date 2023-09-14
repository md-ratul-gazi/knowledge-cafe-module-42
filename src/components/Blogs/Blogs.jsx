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
  return (
    <div className="md:w-2/3">
      <h1 className="text-4xl">Blogs</h1>
    </div>
  );
};

export default Blogs;
