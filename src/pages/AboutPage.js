// src/pages/AboutPage.js

import React from 'react';

const AboutPage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>About Us</h2>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
        Welcome to our platform! We are dedicated to providing a comprehensive and engaging environment for students and educators alike. Our goal is to facilitate learning and growth through innovative educational resources and interactive experiences.
      </p>
      <hr style={{ border: 'none', borderTop: '1px solid #ccc', width: '80%', margin: '20px auto' }}/>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px', margin: '20px auto' }}>
        At our core, we believe in the power of education to transform lives. We strive to offer high-quality content that caters to the needs of both learners and teachers, making education accessible and enjoyable for everyone.
      </p>
    </div>
  );
};

export default AboutPage;