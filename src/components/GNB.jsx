import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function GNB() {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.clear();
    window.location.reload();
    navigate('login');
  };
  return (
    <Container>
      <img
        src={
          'https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png'
        }
      />
      <input placeholder="검색" />
      <div className="controllers">
        <div>home</div>
        <div>-</div>
        <div>+</div>
        <div onClick={handleLogout}>logout</div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 3vh 3vw;
  background-color: white;
  img {
    height: 50px;
  }
  input {
    background-color: #d3d3d3;
    text-align: start;
    padding-left: 20px;
    border-radius: 5px;
  }
  @media (max-width: 550px) {
    input {
      display: none;
    }
  }
  .controllers {
    display: flex;
    gap: 2vw;
    div {
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 40px;
      width: 40px;
      border-radius: 20px;
      background-color: lightGray;
      font-size: 12px;
      :hover {
        background-color: darkGray;
      }
    }
  }
`;
