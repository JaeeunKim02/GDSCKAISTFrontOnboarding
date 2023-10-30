import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';
import Colors from '../style/Colors';
import Modalpop from './Modalpop';

const MyButton = styled(Button)`
  && {
    width: fit-content;
    background-color: ${Colors.POINT_DEEP};

    &:hover {
      background-color: ${Colors.POINT_MEDIUM};
    }

    color: ${Colors.WHITE100};
    padding: 4px 8px;
    color: #fff;
    font-family: Noto Sans;
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0.46px;
    text-transform: uppercase;
  }
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 16px;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 4px;
  background: ${Colors.WHITE100};
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.08);
`;

const Textbox = styled.div`
  display: flex;
  padding: 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  border-radius: 0px;

  .text1 {
    color: ${Colors.BLACK40},
      font-family: 'Noto Sans',
      font-size: 11px,
      font-weight: 400
  }
`;
const Rightbox = styled.div`
  display: flex;
  padding: 0px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  align-self: stretch;
  border-radius: 0px;
`;

function Listitem({ hos, title, date, location, people }) {
  const [isPressed, setIsPressed] = useState(false);

  const handleButtonClick = () => {
    setIsPressed(!isPressed);
  };

  const styles = {
    text1: {
      color: 'rgba(0, 0, 0, 0.40)',
      fontFamily: 'Noto Sans',
      fontSize: '11px',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    text2: {
      color: '#000',
      fontFamily: 'Noto Sans',
      fontSize: 14,
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
    },
    text3: {
      color: 'rgba(0, 0, 0, 0.40)',
      fontFamily: 'Noto Sans',
      fontSize: 11,
      fontWeight: 500,
      fontStyle: 'normal',
      lineHeight: 'normal',
    },
    text4: {
      color: '#FFA800',
      fontFamily: 'Noto Sans',
      fontSize: 11,
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: 'normal',
    },
    text5: {
      color: 'rgba(0, 0, 0, 0.60)',
      fontFamily: 'Inter',
      fontSize: 11,
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: 'normal',
    },
    text6: {
      color: '#000',
      fontFamily: 'Noto Sans',
      fontSize: 11,
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: 'normal',
    },
  };

  return (
    <Container>
      <Textbox>
        <div className="text1">{hos}</div>
        <div style={styles.text2}>{title}</div>
        <div>
          <p style={styles.text4}>{date}</p> <p style={styles.text3}>{location}</p>
        </div>
      </Textbox>
      <Rightbox>
        <div>
          <p style={styles.text5}>대기자 수:</p> <p style={styles.text6}>{people}</p>
        </div>
        <MyButton type="button" onClick={handleButtonClick}>
          접수하기
        </MyButton>
        {isPressed && (
          <Modalpop
            hospital={title}
            onclose={() => {
              setIsPressed(false);
            }}
          />
        )}
      </Rightbox>
    </Container>
  );
}

export default Listitem;
