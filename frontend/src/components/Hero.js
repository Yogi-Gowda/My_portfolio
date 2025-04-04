import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h3>Welcome to my PORTFOLIO!</h3>
          <h2>Hi I am, Yogesh K Gowda</h2>
          <p>
            A passionate programmer, a data science enthusiast, and a problem solver. 
            I enjoy writing efficient code, testing software, and building modern web applications. 
            With an analytical mindset, I use data and AI to find useful insights and create solutions that 
            make a difference. My goal is to keep learning, improving, and contributing to the tech world by solving 
            real-world problems with innovation and creativity.
          </p>
        </div>

        <div className="hero-image">
          <img 
            src="/images/profile.jpeg" 
            alt="Yogesh K Gowda" 
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
