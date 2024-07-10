import React, { useEffect, useState } from 'react';

const ProfilePage = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    console.log('Retrieving user ID from local storage...');
    const userId = localStorage.getItem('userId');
    if (userId) {
      fetchUserData(userId);
      console.log(localStorage);
    }
  }, []);

  const fetchUserData = async (userId) => {
    try {
      const response = await fetch(`http://localhost:8000/profile/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      console.log('Fetched user data:', data); // Log fetched data
      setUserData(data);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };

  if (!userData) {
    console.log(localStorage)

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
        <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Loading...</h2>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Profile</h2>
      {userData ? (
        <div style={{ fontSize: '1.2rem', textAlign: 'center' }}>
          <p><strong>Name:</strong> {userData.name}</p>
          <p><strong>Email:</strong> {userData.email}</p>
          {/* Add more fields as available in userData */}
        </div>
      ) : (
        <p style={{ fontSize: '1.2rem', textAlign: 'center' }}>User Information Will Go Here</p>
      )}
    </div>
  );
};

export default ProfilePage;