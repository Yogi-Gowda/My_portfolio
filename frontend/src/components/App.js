import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./Header";
import Hero from "./Hero";
import Projects from "./Projects";
import Certifications from "./Certificates";
import Blogs from "./Blogs";
import Contact from "./Contact";
import ContactPage from "./ContactUs";

function App() {
  const location = useLocation();

  // Hide Header on Blog and Project Detail Pages
  const isBlogDetailPage = location.pathname.startsWith('/blogs/') && location !== '/blogs';
  const isProjectDetailPage = location.pathname.startsWith('/projects/') && location !== '/projects';

  return (
    <div>
      {/* Show Header only on the Home Page and Blog/Project List Pages */}
      {!isBlogDetailPage && !isProjectDetailPage && <Header />}

      <Routes>
        {/* Home route with all sections */}
        <Route
          path="/"
          element={
            <>
              <section id="hero"><Hero /></section>
              <section id="projects"><Projects /></section>
              <section id="blogs"><Blogs /></section>
              <section id="certifications"><Certifications /></section>
              <section id="contact12"><Contact /></section>
              <section id="contact"><ContactPage /></section>
            </>
          }
        />

        {/* Blog Section Routes */}
        <Route path="/blogs/*" element={<Blogs />} />

        {/* Project Section Routes */}
        <Route path="/projects/*" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
