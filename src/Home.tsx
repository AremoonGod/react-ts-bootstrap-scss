/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
    { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
    { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
  ])
  
  const [name, setName] = useState<string>('mario');

  const handleDelete = (id: number) => {
    const newBlogs = blogs.filter(blog => blog.id !== id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    console.log(blogs, name);
  }, [name])

  return (
    <div className="home">
      <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete}/>
      <button className="btn btn-primary" onClick={() => setName('luigi')}>Change Name</button>
      <p>{ name }</p>
    </div>
  );
}
 
export default Home;