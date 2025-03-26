import React from 'react';
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import './Blogs.css';

const BLOG_DATA = [
  {
    id: 1,
    title: "Understanding Data Science: A Beginner's Guide",
    description: "A comprehensive guide to understanding Data Science and its key concepts.",
    date: "November 15, 2024",
    content: `
      <h3>What is Data Science?</h3>
      <p>Data Science involves extracting meaningful insights from data using techniques from statistics, computer science, and domain expertise.</p>

      <h3>Key Components of Data Science</h3>
      <ul>
        <li><strong>Data Collection:</strong> Gathering data from databases, sensors, and websites.</li>
        <li><strong>Data Cleaning:</strong> Removing duplicates, handling missing data, and correcting errors.</li>
        <li><strong>Data Analysis:</strong> Identifying trends and relationships in data using statistical methods.</li>
        <li><strong>Data Visualization:</strong> Presenting insights using charts and dashboards.</li>
        <li><strong>Machine Learning:</strong> Creating algorithms that allow computers to learn and make predictions.</li>
      </ul>

      <h3>Skills You Need as a Beginner</h3>
      <ul>
        <li><strong>Programming:</strong> Python and R are essential languages.</li>
        <li><strong>Statistics:</strong> Understanding mean, variance, and hypothesis testing.</li>
        <li><strong>Data Manipulation:</strong> Using libraries like Pandas and NumPy.</li>
        <li><strong>Machine Learning Basics:</strong> Understanding regression, classification, and clustering.</li>
      </ul>

      <h3>Real-World Applications of Data Science</h3>
      <ul>
        <li><strong>Healthcare:</strong> Predicting diseases and optimizing treatments.</li>
        <li><strong>Finance:</strong> Fraud detection and credit risk assessment.</li>
        <li><strong>Retail:</strong> Personalized recommendations and sales forecasting.</li>
        <li><strong>Technology:</strong> Recommender systems and autonomous systems.</li>
      </ul>

      <h3>Starting Your Data Science Journey</h3>
      <ul>
        <li><strong>Learn the Fundamentals:</strong> Online courses on Python, statistics, and machine learning.</li>
        <li><strong>Work on Projects:</strong> Use real-world datasets on Kaggle.</li>
        <li><strong>Join the Community:</strong> Attend meetups, join forums, and contribute to open-source projects.</li>
        <li><strong>Stay Curious:</strong> Keep up with new tools and technologies in data science.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Data Science is a rapidly growing field offering vast opportunities. Learning the fundamentals and working on projects is the best way to start your journey.</p>
    `,
  },
  {
    id: 2,
    title: "Why Python is Essential for Data Analysis",
    description: "Discover why Python is the go-to language for data professionals.",
    date: "December 23, 2024",
    content: `
      <h3>Why Choose Python?</h3>
      <p>Python is widely used in data analysis due to its simplicity and extensive libraries.</p>

      <h3>Essential Python Libraries for Data Analysis</h3>
      <ul>
        <li><strong>Pandas:</strong> Data manipulation and analysis.</li>
        <li><strong>NumPy:</strong> Numerical computing with arrays.</li>
        <li><strong>Matplotlib & Seaborn:</strong> Visualization tools.</li>
        <li><strong>Scikit-learn:</strong> Machine learning models.</li>
        <li><strong>SciPy:</strong> Advanced mathematical and statistical functions.</li>
      </ul>

      <h3>Python's Advantages</h3>
      <ul>
        <li>Simple and easy-to-learn syntax.</li>
        <li>Strong community support and continuous development.</li>
        <li>Scalable for large-scale data processing.</li>
        <li>Seamless integration with big data and cloud platforms.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>Python remains the most preferred language for data analysis due to its ease of use, powerful libraries, and strong community support.</p>
    `,
  },
  {
    id: 3,
    title: "Is a Programmer Required After 5 Years?",
    description: "Exploring the future demand for programmers in the age of AI and automation.",
    date: "January 16, 2025",
    content: `
      <h3>The Increasing Role of Technology</h3>
      <p>Technology is deeply integrated into our daily lives, and this trend will continue to grow.</p>

      <h3>Will AI Replace Programmers?</h3>
      <p>While AI can automate repetitive tasks, human programmers are still required for complex problem-solving and innovation.</p>

      <h3>Future Skills for Programmers</h3>
      <ul>
        <li>Adapting to emerging technologies like AI and blockchain.</li>
        <li>Collaborating with non-technical teams.</li>
        <li>Specializing in fields like cybersecurity, quantum computing, and data science.</li>
      </ul>

      <h3>The Growing Demand for Software Engineers</h3>
      <p>Almost every industry, from healthcare to finance, relies on software, ensuring continued demand for programmers.</p>

      <h3>Conclusion</h3>
      <p>Programming will remain a valuable skill, but evolving with new technologies will be key to long-term success.</p>
    `,
  }
];

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <div className="blog-card">
      <h3 className="blog-card-title">{blog.title}</h3>
      <p className="blog-date">{blog.date}</p>
      <p className="blog-description">{blog.description}</p>
      <button 
        onClick={() => navigate(`/blogs/${blog.id}`)} 
        className="blog-read-more-btn"
      >
        Read More
      </button>
    </div>
  );
};

const BlogList = () => {
  return (
    <div className="blog-page">
      <main className="blog-container">
        <h2 className="blog-title">Explore My Blogs</h2>
        <div className="blog-grid">
          {BLOG_DATA.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </main>
    </div>
  );
};

const BlogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const blog = BLOG_DATA.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return (
      <div className="blog-detail">
        <h2>Blog not found</h2>
        <button onClick={() => navigate(-1)} className="blog-back-btn">
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="blog-detail">
      <h2>{blog.title}</h2>
      <p className="blog-date">{blog.date}</p>
      <div className="blog-content" dangerouslySetInnerHTML={{ __html: blog.content }} />
      <button onClick={() => navigate(-1)} className="blog-back-btn">
        Back
      </button>
    </div>
  );
};

const Blogs = () => {
  return (
    <Routes>
      <Route path="/" element={<BlogList />} />
      <Route path="/:id" element={<BlogDetail />} />
    </Routes>
  );
};

export default Blogs;
