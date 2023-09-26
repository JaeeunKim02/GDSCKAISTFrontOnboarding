import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  box-shadow: 0 4 16 0 rgba(0, 0, 0, 0.08);
`;

function Listitem({ hos, title, date, location, people }) {
  const [isPressed, setIsPressed] = useState(false);

  const buttonStyles = {
    boxstyle: {
      display: 'flex',
      width: 688,
      padding: 16,
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      borderRadius: 'var(--borderRadius, 4px)',
      background: 'var(--WHITE100, #FFF)',
      boxShadow: '0 4 16 0 rgba(0, 0, 0, 0.08)',
    },
    textbox: {
      display: 'flex',
      padding: 'var(--none, 0px)',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: 'var(--borderRadius, 4px)',
      borderRadius: 'var(--none, 0px)',
    },
    rightbox: {
      display: 'flex',
      padding: 'var(--none, 0px)',
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      alignSelf: 'stretch',
      borderRadius: 'var(--none, 0px)',
    },
    button: {
      display: 'flex',
      padding: '4px 10px',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 'var(--borderRadius, 4px)',
      background: 'var(--POINT_DEEP, #FFA800)',
    },
  };

  const handleButtonClick = () => {
    setIsPressed(!isPressed);
  };

  return (
    <div id="box" style={buttonStyles.boxstyle}>
      <div id="textbox" style={buttonStyles.textbox}>
        <div>{hos}</div>
        <div>{title}</div>
        <div>
          <p>{date}</p> <p>{location}</p>
        </div>
      </div>
      <div id="rightbox" style={buttonStyles.rightbox}>
        <div>
          <p>대기자 수:</p> <p>{people}</p>
        </div>
        <button type="button" style={buttonStyles.button} onClick={handleButtonClick}>
          접수하기
        </button>
      </div>
    </div>
  );
}

export default Listitem;
