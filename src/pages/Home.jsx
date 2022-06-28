import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Feeds from '../components/Feeds';
import GNB from '../components/GNB';

function Home({ user, setUser }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    if (user === null) {
      navigate('/login');
    }
    setLoading(false);
  }, [user]);

  return (
    <div>
      <GNB setUser={setUser} />
      <Feeds />
    </div>
  );
}

export default Home;
