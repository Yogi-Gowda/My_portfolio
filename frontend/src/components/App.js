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

  const isBlogDetailPage = location.pathname.startsWith('/blogs/') && location !== '/blogs';
  const isProjectDetailPage = location.pathname.startsWith('/projects/') && location !== '/projects';

  return (
    <div>
      {!isBlogDetailPage && !isProjectDetailPage && <Header />}

      <Routes>
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

        <Route path="/blogs/*" element={<Blogs />} />

        <Route path="/projects/*" element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
