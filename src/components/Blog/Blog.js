import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const posts = [
    {
      title: 'Mastering Dynamic Programming',
      date: 'Nov 20, 2024',
      description: 'An in-depth guide to solving dynamic programming problems effectively.',
      image: 'https://assets.leetcode.com/contest/LeetCode/company_logo',
      link: '/blog/dynamic-programming',
    },
    {
      title: 'Graph Theory Essentials',
      date: 'Nov 18, 2024',
      description: 'Learn the basics of graph theory and how to apply it to competitive programming.',
      image: 'https://rare-gallery.com/mocahbig/87639-python-code-computer-programming-logo-hd-4k.jpg',
      link: '/blog/graph-theory',
    },
    {
      title: 'Advanced Data Structures',
      date: 'Nov 15, 2024',
      description: 'Explore complex data structures and their applications in competitive programming.',
      image: 'https://logopond.com/logos/75cb9ba1801aa1c90ca2eeaa667c95ea.png',
      link: '/blog/advanced-data-structures',
    },
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="blog-container">
      <h1 className="blog-header">Our Latest Blog Posts</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for posts..."
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>

      <div className="blog-grid">
        {filteredPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <img src={post.image} alt={post.title} />
            <h3>{post.title}</h3>
            <p>{post.description}</p> <br></br>
            <a href={post.link} className="read-more-btn">Read More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
