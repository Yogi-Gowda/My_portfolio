import React from 'react';
import { Routes, Route, useNavigate, useParams, useLocation } from 'react-router-dom';
import './Projects.css';

// Project Data with Detailed Information
const PROJECTS_DATA = [
  {
    id: 1,
    title: 'Stock Data Analysis',
    description:
      'A comprehensive analysis of stock data to uncover trends and actionable insights using Python libraries like Pandas and Matplotlib.',
    technologies: ['Python', 'Pandas', 'Matplotlib', 'Excel', 'Seaborn'],
    details: `
      <h3>Project Overview</h3>
      <p>This project involves analyzing stock market data to identify patterns and trends that help in making investment decisions.</p>

      <h3>Technologies Used</h3>
      <ul>
        <li><strong>Python:</strong> Used for scripting and data processing.</li>
        <li><strong>Pandas:</strong> Data manipulation and cleaning.</li>
        <li><strong>Matplotlib & Seaborn:</strong> Data visualization.</li>
        <li><strong>Excel:</strong> For additional data analysis and reporting.</li>
      </ul>

      <h3>Key Features</h3>
      <ul>
        <li>Real-time stock price analysis.</li>
        <li>Trend predictions using statistical models.</li>
        <li>Interactive visualizations to interpret stock movements.</li>
      </ul>
    `,
  },
  {
    id: 2,
    title: 'Personal Identity Portal',
    description:
      'A personal portfolio website to showcase projects, blogs, and achievements. Built using React.js and CSS.',
    technologies: ['React', 'CSS', 'JavaScript','Express.js','Node.js'],
    details: `
      <h3>Project Overview</h3>
      <p>A modern, responsive personal portfolio to showcase projects, blog posts, and contact details.</p>

      <h3>Technologies Used</h3>
      <ul>
        <li><strong>React:</strong> Component-based UI development.</li>
        <li><strong>CSS:</strong> Styled-components for design and responsiveness.</li>
        <li><strong>JavaScript:</strong> Interactive elements and animations.</li>
        <li><strong>Express.js:</strong> Used as the runtime environmen.</li>
        <li><strong>Node.js:</strong> Used as the web framework to handle HTTP requests from the frontend and send emails.</li>
      </ul>

      <h3>Key Features</h3>
      <ul>
        <li>Fully responsive design.</li>
        <li>Integrated blog section.</li>
        <li>Contact form with email integration.</li>
      </ul>
    `,
  },
  {
    id: 3,
    title: 'Web Technology (Aviation Website)',
    description:
      'A simple, informative aviation-themed website built using HTML, CSS, and JavaScript.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    details: `
      <h3>Project Overview</h3>
      <p>This project is a static webpage designed to provide information about aviation, its history, and technological advancements.</p>

      <h3>Technologies Used</h3>
      <ul>
        <li><strong>HTML:</strong> Structured the webpage content.</li>
        <li><strong>CSS:</strong> Styled the website to ensure a visually appealing layout.</li>
        <li><strong>JavaScript:</strong> Added basic interactivity like animations and dynamic content.</li>
      </ul>

      <h3>Website Features</h3>
      <ul>
        <li>Home Page with an introduction to aviation.</li>
        <li>History Section covering key aviation milestones.</li>
        <li>Interactive Image Gallery showcasing different aircraft models.</li>
        <li>Contact Form for users to submit inquiries.</li>
      </ul>

      <h3>Conclusion</h3>
      <p>This project was an exercise in frontend development, focusing on designing a clean and engaging user experience for an aviation-related website.</p>
    `,
  },
];

// Project Card Component (Used in Project List)
const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="project-card">
      <h3 className="project-title">{project.title}</h3>
      <p className="project-description">{project.description}</p>
      <ul className="technologies-list">
        {project.technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
      <button 
        onClick={() => navigate(`/projects/${project.id}`)} 
        className="project-view-btn"
      >
        View Project
      </button>
    </div>
  );
};

// Project List Component
const ProjectList = () => {
  return (
    <div className="projects-page">
      <main className="projects-container">
        <h2 className="projects-title">Showcasing My Work</h2>
        <div className="projects-grid">
          {PROJECTS_DATA.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </main>
    </div>
  );
};

// Project Detail Component (FIXED: Now Displays Details Properly)
const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS_DATA.find(project => project.id === parseInt(id));

  if (!project) {
    return (
      <div className="project-detail">
        <h2>Project not found</h2>
        <button onClick={() => navigate(-1)} className="project-back-btn">
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <div className="project-content" dangerouslySetInnerHTML={{ __html: project.details }} />
      <button onClick={() => navigate(-1)} className="project-back-btn">
        Back
      </button>
    </div>
  );
};

// Main Projects Component
const Projects = () => {
  return (
    <Routes>
      <Route path="/" element={<ProjectList />} />
      <Route path="/:id" element={<ProjectDetail />} />
    </Routes>
  );
};

export default Projects;
