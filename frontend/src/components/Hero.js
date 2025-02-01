import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        {/* Left Side: Text */}
        <div className="hero-text">
          <h3>Welcome to my portfolio!</h3>
          <h2>I am Yogesh K Gowda</h2>
          <p>
            I am a passionate programmer, a data science enthusiast, and a problem solver. 
            I enjoy writing efficient code, testing software, and building modern web applications. 
            With an analytical mindset, I use data and AI to find useful insights and create solutions that 
            make a difference. My goal is to keep learning, improving, and contributing to the tech world by solving 
            real-world problems with innovation and creativity.
          </p>
        </div>

        {/* Right Side: Image */}
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
