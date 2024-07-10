
import React, { useState } from 'react';

const ContactPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
   
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
<div style={{
  display: 'flex', 
  flexDirection: 'column', 
  alignItems: 'center', 
  justifyContent: 'center', 
  height: '100vh', 
  backgroundColor: '#f0f0f0', 
  padding: '40px' 
}}>
  <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Contact Us</h2> {/* Increased font size */}
  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '1200px', margin: 'auto' }}> {/* Adjusted gap and maxWidth for larger elements */}
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required style={{ fontSize: '1.5rem' }} /> {/* Increased font size */}
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email" required style={{ fontSize: '1.5rem' }} /> {/* Increased font size */}
    <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Your Message" required style={{ fontSize: '1.5rem', resize: 'none' }}></textarea> {/* Increased font size and disabled resizing */}
    <button type="submit" style={{ fontSize: '1.5rem', padding: '10px 20px' }}>Send Message</button> {/* Increased font size and padding */}
  </form>
</div>
  );
};

export default ContactPage;