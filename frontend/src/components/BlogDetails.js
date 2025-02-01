import React from "react";
import { useParams, Link } from "react-router-dom";
import "./Blogs.css";

const BlogDetailsPage = () => {
  const { slug } = useParams();

  const blogs = [
    {
      slug: "understanding-data-science",
      title: "Understanding Data Science: A Beginner’s Guide",
      date: "November 15, 2024",
      content: "Data Science is a field that combines statistics, programming, and domain expertise to analyze data.",
    },
    {
      slug: "boost-your-portfolio",
      title: "5 Projects That Will Boost Your Data Science Portfolio",
      date: "November 20, 2024",
      content: "Building a strong portfolio is essential for showcasing your skills in data science. Explore these projects.",
    },
    {
      slug: "why-python-is-essential",
      title: "Why Learning Python is Essential for Data Analysts",
      date: "November 22, 2024",
      content: "Python has become the most popular programming language for data analysis due to its simplicity and libraries.",
    },
  ];

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="blog-details">
      <h1>{blog.title}</h1>
      <p className="blog-date">{blog.date}</p>
      <p>{blog.content}</p>
      <Link to="/blogs" className="back-link">
        Back to Blogs
      </Link>
    </div>
  );
};

export default BlogDetailsPage;
