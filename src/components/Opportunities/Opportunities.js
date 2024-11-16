import React, { useState } from 'react';
import './Opportunities.css';

const Opportunities = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const opportunities = [
    {
      company: 'Google',
      role: 'Software Engineering Intern',
      eligibility: '3rd Year, CS/IT',
      image: 'https://wallpapercave.com/wp/wp2860503.jpg',
      link: 'https://careers.google.com',
    },
    {
      company: 'Microsoft',
      role: 'Data Science Intern',
      eligibility: '2nd/3rd Year, CS/IT/EE',
      image: 'https://static.vecteezy.com/system/resources/previews/021/514/825/original/microsoft-software-brand-logo-symbol-with-name-design-illustration-with-black-background-free-vector.jpg',
      link: 'https://careers.microsoft.com',
    },
    {
      company: 'Amazon',
      role: 'SDE Intern',
      eligibility: '3rd Year, CS/IT',
      image: 'https://tse1.mm.bing.net/th?id=OIP.oo2bk7LzvHCqkL6_Ai7m4AHaE9&pid=Api&P=0&h=180',
      link: 'https://www.amazon.jobs',
    },
    
    
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredOpportunities = opportunities.filter(opportunity =>
    opportunity.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
    opportunity.role.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="opportunities-container">
      <h1 className="opportunities-header">Internship Opportunities</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for opportunities..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="opportunities-grid">
        {filteredOpportunities.map((opportunity, index) => (
          <div className="opportunity-card" key={index}>
            <img src={opportunity.image} alt={opportunity.company} />
            <h3>{opportunity.company}</h3><br></br>
            <p><strong>Role:</strong> {opportunity.role}</p> <br></br>
            <p><strong>Eligibility:</strong> {opportunity.eligibility}</p><br></br><br></br>
            <a href={opportunity.link} className="apply-now-btn" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Opportunities;
