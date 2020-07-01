import React from 'react';
import Footer from './HomeComponents/Footer';
import '../styles/about.css';


function About() {
  return (
    <>
    <section id="about"> 
      <h3>This project was built using:</h3>
      <ul className="tools-used">
        <li>Single responsability principle</li>
        <li>Separation of concerns</li>
        <li>Reusable components</li>
        <li>Reusable styles</li>
        <li>React Hooks - useEffect, useState</li>
        <li>Mobile first design approach</li>
        <li>Conditional rendering</li>
        <li>Full use of version control via Github: Different branches, commits, pull requests and merges.</li>
        <li>Async Await</li>
        <li>Fetch</li>
        <li>Javascript</li>
        <li>CSS</li>
        <li>HTML</li>
        <li>React</li>
        <li>React Bootstrap</li>
        <li>Deployed on Netlify</li>
      </ul>
      <p>This site is a Single Page Application (SPA) and is full responsive. It has been verified using the mobile friendly google test.</p>
      <p>This site has an overall score of 90; with Accessibility, Best Practices and SEO above 90. Score obtained via lighthouse.</p> 
    </section>
    <Footer />
    </>
  );
}

export default About;
