import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDeleteBlog,
  setBlogListOnInitialLoad,
} from "../store/slices/blogSlice";

const BlogList = () => {
  const { blogList } = useSelector((state) => state.blog);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      setBlogListOnInitialLoad({
        blogList: JSON.parse(localStorage.getItem("blogList")) || [],
      })
    );
  }, []);

  function onDeleteBlogClick(getBlogId) {
    dispatch(
      handleDeleteBlog({
        currentBlogId : getBlogId,
      })
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Blogs</h2>
      {blogList?.length > 0 ? (
        <div style={styles.blogList}>
          {blogList.map((singleBlogItem) => (
            <div key={singleBlogItem?.id} style={styles.blogItem}>
              <h3 style={styles.title}>{singleBlogItem?.title}</h3>
              <h4 style={styles.description}>{singleBlogItem?.description}</h4>
              <button>Edit Blog</button>
              <button onClick={() => onDeleteBlogClick(singleBlogItem?.id)}>
                Delete Blog
              </button>
            </div>
          ))}
        </div>
      ) : (
        <h2 style={styles.noBlogsMessage}>
          No blog added, Please add new blog!
        </h2>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: "linear-gradient(135deg, #FFB6C1, #FFD700)", // Gradient background
    padding: "20px",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#2C3E50", // Dark color to stand out
    marginBottom: "30px", // Spacing below the heading
    textDecoration: "underline", // Adding underline
  },
  blogList: {
    width: "100%",
    maxWidth: "800px",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    background: "linear-gradient(135deg, #FFB6C1, #FFD700)", // Matching the same gradient
    marginBottom: "20px",
  },
  blogItem: {
    padding: "20px",
    borderBottom: "1px solid #34495E", // Darker border color
    marginBottom: "20px",
    transition: "background-color 0.3s",
    borderRadius: "8px",
  },
  title: {
    fontSize: "24px", // Slightly bigger title font size
    fontWeight: "bold",
    fontStyle: "italic", // Title is italicized
    color: "#2C3E50", // Darker color for title for better readability
    marginBottom: "10px",
  },
  description: {
    fontSize: "18px",
    color: "#34495E", // Darker gray color for description
  },
  noBlogsMessage: {
    fontSize: "18px",
    fontWeight: "500",
    color: "#2C3E50", // Dark color for the "No blogs" message
    textAlign: "center",
  },
};

export default BlogList;
