import React, { useState } from 'react';
import styled from 'styled-components';
import { Modal, Select, TextField, Button, MenuItem } from '@mui/material';
import Colors from '../style/Colors';
import { useRecoilState } from 'recoil';
import { reservationsState } from './Atom';

// const MyModal = styled(Modal)`
//   && {
//     display: hidden;
//   }
// `;
const Container = styled.div`
  position: absolute;
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 0px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 0px;
  /* background: ${Colors.BLACK40}; */
`;

const MySelect = styled(Select)`
  && {
    display: flex;
    width: 220px;
    flex-direction: column;
    align-items: flex-start;
  }
`;

const MyTextField = styled(TextField)`
  && {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    align-self: stretch;
    width: 100%;
  }
`;

const MyButton = styled(Button)`
  && {
    display: flex;
    padding: 4px 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 4px;
    background: ${Colors.GREY00};
  }
`;

const Contents = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: fit-content;
  background-color: ${Colors.WHITE100};
  display: flex;
  flex-direction: column;
  width: 480px;
  gap: 16px;
  padding: 20px;
`;

function Modalpop({ hospital, onclose }) {
  const Styles = {
    text1: {
      color: '#000',
      fontFamily: 'Noto Sans',
      fontSize: 16,
      fontStyle: 'normal',
      fontWeight: 700,
    },
    frame12: {
      display: 'flex',
      padding: 0,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'flex-end',
      gap: 10,
      alignSelf: 'stretch',
      borderRadius: 0,
    },
  };

  const [symptom, setSymptom] = useState('');
  const [note, setNote] = useState('');
  const [reservations, setReservations] = useRecoilState(reservationsState);

  const handleSelect = event => {
    setSymptom(event.target.value);
  };

  const handleReservation = () => {
    setReservations([
      ...reservations,
      {
        hospitalName: hospital,
        symptom,
        note,
        time: new Date(),
      },
    ]);
    setSymptom('');
    setNote('');
    onclose();
  };

  // 접수하기 버튼 활성화 여부
  const isSubmitButtonEnabled = symptom !== '';

  return (
    <Container>
      <Modal open onClose={onclose}>
        <Contents>
          <div style={Styles.text1}>{hospital}-접수하기</div>
          <MySelect value={symptom} onChange={handleSelect} label="증상">
            <MenuItem value="">증상을 선택해주세요</MenuItem>
            <MenuItem value="콧물">콧물</MenuItem>
            <MenuItem value="두통">두통</MenuItem>
            <MenuItem value="복통">복통</MenuItem>
          </MySelect>
          <MyTextField
            defaultValue="입력해주세요"
            label="추가 참고 사항"
            variant={'standard'}
            value={note}
            onChange={e => setNote(e.target.value)}
            fullWidth
          />
          <div style={Styles.frame12}>
            <MyButton type="button" disabled={!isSubmitButtonEnabled} onClick={handleReservation}>
              접수하기
            </MyButton>
          </div>
        </Contents>
      </Modal>
    </Container>
  );
}

export default Modalpop;
