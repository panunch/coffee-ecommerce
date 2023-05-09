import React from 'react';
import { useLocation } from 'react-router-dom';

function AdminPage() {
  const location = useLocation();

  return (
    <div>
      <h1>Welcome to the Admin Page!</h1>
      <p>You are currently at: {location.pathname}</p>
    </div>
  );
}

export default AdminPage;
