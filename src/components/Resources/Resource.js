import React from 'react';
import './Resource.css';

const resources = [
  {
    title: 'LeetCode',
    description: 'The go-to platform for coding challenges and preparing for technical interviews.',
    link: 'https://leetcode.com',
    type: 'Platform',
    Logo: 'https://logopond.com/logos/75cb9ba1801aa1c90ca2eeaa667c95ea.png',
  },
  {
    title: 'Codeforces',
    description: 'A competitive programming platform with contests, challenges, and community support.',
    link: 'https://codeforces.com',
    type: 'Platform',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Codeforces_Logo.png',
  },
  {
    title: 'CP Handbook',
    description: 'A comprehensive resource for learning competitive programming concepts and algorithms.',
    link: 'https://cpbook.net',
    type: 'Book',
    icon: 'https://raw.githubusercontent.com/competitiveprogramming/CP-Handbook/master/thumbnail.png',
  },
  {
    title: 'GeeksforGeeks',
    description: 'Articles and tutorials on various computer science topics, algorithms, and data structures.',
    link: 'https://www.geeksforgeeks.org',
    type: 'Tutorial',
    Logo: 'https://media.geeksforgeeks.org/wp-content/cdn-uploads/gfg_200X200-1.png',
  },
];

const Resources = () => {
  return (
    <div className="resources-container">
      <h1 className="resources-heading">Programming Resources</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search Resources..." />
      </div>
      <div className="resources-grid">
        {resources.map((resource, index) => (
          <div className="resource-card" key={index}>
            <img src={resource.icon} alt={resource.title} className="resource-icon" /> 
            <h3>{resource.title}</h3> 
            <p>{resource.description}</p> <br></br>
            <a href={resource.link} target="_blank" rel="noopener noreferrer" className="resource-link">
              Explore
            </a> 
            <br></br>
           
          </div>
        ))}
      </div>
    </div>
  );
};

export default Resources;
