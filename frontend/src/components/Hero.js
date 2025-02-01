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
            I am a Data Science major BCA student who is enthusiastic about investigating 
            and understanding the realm of data. Inherently curious, I find pleasure in grasping patterns, 
            discovering insights, and tackling projects that push me to think critically.
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
