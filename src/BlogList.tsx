const BlogList = (props: any) => {
  const title = props.title;
  const blogs = props.blogs;
  const handleDelete = props.handleDelete;

  return (
    <div className="blog-list">
      <h2>{ title }</h2>
      {blogs.map((blog: any) => (
        <div className="blog-preview" key={blog.id} >
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <button className="btn btn-info" onClick={() => handleDelete(blog.id)}> Delte Blog </button>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;