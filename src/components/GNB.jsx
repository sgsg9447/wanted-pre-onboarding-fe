import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../styles/colors';
import { FaHome } from 'react-icons/fa';
import { FaPlusSquare } from 'react-icons/fa';
import { FaHeart } from 'react-icons/fa';

export default function GNB({ setUser }) {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };
  return (
    <Container>
      <img
        src={
          'https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png'
        }
      />
      <input placeholder="검색" />
      <ButtonBox>
        <FaHome />
        <FaPlusSquare />
        <FaHeart />
        <OneBtn onClick={handleLogout}>logout</OneBtn>
      </ButtonBox>
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
    text-align: center;
    padding-left: 20px;
    border-radius: 5px;
    width: 40%;
  }
  @media (max-width: 550px) {
    input {
      display: none;
    }
  }
`;

const ButtonBox = styled.div`
  display: flex;
  gap: 2vw;
  justify-content: center;
  align-items: center;
  font-size: 28px;
`;

const OneBtn = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: ${colors.lightGray};
  font-size: 12px;
  :hover {
    background-color: ${colors.darkGray};
  }
`;
