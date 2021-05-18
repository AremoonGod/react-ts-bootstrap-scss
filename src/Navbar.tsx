import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links"></div>
      <a href="/">Home</a>
      <a href="/create" style={{}}>
        New Blog
      </a>
    </nav>
  );
}

export default Navbar;
