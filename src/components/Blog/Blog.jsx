import PropTypes from "prop-types"; // ES6
import { BsBookmarks } from "react-icons/bs";
const Blog = ({ blog, handleAddBookMarks, handleMarkAsRead }) => {
  const {
    id,
    title,
    cover,
    reading_time,
    author,
    author_img,
    posted_date,
    hashtags,
  } = blog;
  return (
    //   All Blog section here
    <div className="mb-20 space-y-4">
      <img
        className="w-full rounded-xl mb-8"
        src={cover}
        alt={`Cover picture of the title: ${title}`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex items-center">
          <img className="w-14" src={author_img} alt={author} />
          <div className="ml-6">
            <h3 className="text-2xl">{author}</h3>
            <p>{posted_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddBookMarks(blog)}
            className="ml-2 text-red-600 text-2xl"
          >
            <BsBookmarks></BsBookmarks>
          </button>
        </div>
      </div>
      <h2 className="text-4xl mb-4">{title}</h2>
      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            <a className="mr-3" href="">
              #{hash}
            </a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleMarkAsRead(reading_time, id)}
        className="text-purple-800 font-bold underline"
      >
        Mark As Read
      </button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddBookMarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired,
};

export default Blog;
