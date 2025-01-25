import React from "react";
import "./App.css";
// import CounterButton from "./counter-example/counterButton";
// import CounterValue from "./counter-example/counterValue";
import AddNewBlog from "./blog-app/add-new-blog";
import BlogList from "./blog-app/blog-list";

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Blog List App</h1>
      <AddNewBlog />
      <BlogList />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: "100vh",
    background: "linear-gradient(135deg, #FFB6C1, #FFD700)", // Gradient background
    padding: "20px",
  },
  heading: {
    fontSize: "32px",
    fontWeight: "bold",
    color: "#2C3E50", // Dark color to stand out
    marginBottom: "30px",
    textDecoration: "underline", // Underline the heading
  },
};

export default App;
