import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookMarks, readingTime }) => {
  return (
    <div className="md:w-1/3 bg-gray-300 ml-4 rounded-lg pt-4 mt-2">
      <div>
        <h3 className="text-4xl">Reading Time: {readingTime} min</h3>
      </div>
      <h2 className="text-3xl text-center">
        Bookmarked Blogs: {bookMarks.length}
      </h2>
      {bookMarks.map((bookMark, idx) => (
        <Bookmark key={idx} bookmark={bookMark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookMarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired,
};

export default Bookmarks;
