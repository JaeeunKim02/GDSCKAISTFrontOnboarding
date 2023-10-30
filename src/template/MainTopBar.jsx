import React from 'react';
import styled from 'styled-components';
import Colors from '../style/Colors';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  padding: 16px;
  background-color: ${Colors.WHITE100};
  border-radius: 8px;
  align-items: center;

  .title {
    font-family: 'Noto Sans KR Bold';
    font-size: 24px;
    margin-right: auto;
  }
`;

const MainTopBar = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1 className="title">MedicalBook</h1>
      <div onClick={() => navigate('/main')}>홈</div>
      <div onClick={() => navigate('/my')}>내 예약</div>
    </Container>
  );
};

export default MainTopBar;
