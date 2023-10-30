import React, { useState } from 'react';

function Chip({ title }) {
  const [isPressed, setIsPressed] = useState(false);

  const buttonStyles = {
    display: 'flex',
    padding: '4px 8px',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    borderRadius: '8px',
    background: isPressed ? 'var(--POINT_DEEP, #FFA800)' : 'var(--WHITE100, #FFF)',
    border: isPressed ? 'none' : '1px solid var(--POINT_MEDIUM, #FFD687)',
    cursor: 'pointer',
    color: '#FFA800',
    fontFamily: 'Noto Sans',
    fontSize: 12,
    fontStyle: 'normal',
    fontWeight: 500,
    lineHeight: 'normal',
  };

  const handleButtonClick = () => {
    setIsPressed(!isPressed);
  };

  return (
    <div>
      <button type="button" style={buttonStyles} onClick={handleButtonClick}>
        {title}
      </button>
    </div>
  );
}

export default Chip;
