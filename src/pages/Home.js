import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Feed from '../components/Feed';
import GNB from '../components/GNB';

export default function Home({ user, setUser }) {
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
    <Container>
      <GNB />
      <Feed />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  background-color: lightGray;
  min-height: 1000vh;
`;
