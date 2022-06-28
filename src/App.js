import React, { useEffect, useState } from 'react';
import Login from './pages/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem('user');
    setUser(JSON.parse(data));
  }, []);

  return (
    <Routes>
      <Route path="login" element={<Login user={user} setUser={setUser} />} />
    </Routes>
  );
}

export default App;
