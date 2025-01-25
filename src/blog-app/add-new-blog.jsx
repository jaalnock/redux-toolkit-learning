import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleInputChange } from "../store/slices/blogSlice";

const AddNewBlog = () => {
  const { formData } = useSelector((state) => state.blog);

  const dispatch = useDispatch();

  function onChangeInput(event) {
    dispatch(
      handleInputChange({
        // name can be title or description based on what we are changing
        [event.target.name]: event.target.value,
      })
    );
  }

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Blog Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter Blog Title"
            id="title"
            value={formData?.title}
            style={styles.input}
            onChange={onChangeInput}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Blog Description</label>
          <input
            type="text"
            name="description"
            placeholder="Enter Blog Description"
            id="description"
            value={formData?.description}
            style={styles.input}
            onChange={onChangeInput}
          />
        </div>
        <button type="submit" style={styles.button}>
          Add New Blog
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #FFB6C1, #FFD700)", // Gradient background
  },
  form: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "8px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    width: "100%",
    maxWidth: "450px",
    color: "#333", // Dark text for readability on light background
  },
  inputGroup: {
    marginBottom: "20px",
  },
  label: {
    fontSize: "16px",
    fontWeight: "600",
    color: "#333", // Dark text for readability
  },
  input: {
    width: "100%",
    padding: "12px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ddd",
    marginTop: "8px",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "12px",
    fontSize: "18px",
    fontWeight: "600",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    transition: "background-color 0.3s ease-in-out",
  },
  // Adding hover effect in the styles object
  buttonHover: {
    backgroundColor: "#0056b3", // Darken the blue on hover
  },
};

export default AddNewBlog;
