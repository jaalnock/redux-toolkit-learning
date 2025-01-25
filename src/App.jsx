import "./App.css";
// import CounterButton from "./counter-example/counterButton";
// import CounterValue from "./counter-example/counterValue";
import AddNewBlog from "./blog-app/add-new-blog";
import BlogList from "./blog-app/blog-list";

function App() {
  return (
    <>
      <div>
        {/* <h1>Redux Toolkit</h1>
        <CounterButton />
        <CounterValue /> */}

        <h1>Blog List App</h1>
        <AddNewBlog />
        <BlogList />
      </div>
    </>
  );
}

export default App;
