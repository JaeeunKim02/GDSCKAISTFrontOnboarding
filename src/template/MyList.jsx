import React from 'react';
import ReservationItem from '../components/ReservationItem';
import Colors from '../style/Colors';
import { useRecoilState } from 'recoil';
import { reservationsState } from '../components/Atom';

function MyList() {
  const [reservations, setReservations] = useRecoilState(reservationsState);

  const cancelReservation = index => {
    const updatedReservations = [...reservations];
    updatedReservations.splice(index, 1);
    setReservations(updatedReservations);
  };

  const styles = {
    layout: {
      display: 'flex',
      width: '720px',
      padding: '24px 16px',
      flexDirection: 'column',
      alignItems: 'flex-start',
      gap: '16px',
      flex: '1 0 0',
      borderRadius: 'var(--1, 8px)',
      background: Colors.WHITE100,
    },
  };

  return (
    <div style={styles.layout}>
      {reservations.map((reservation, index) => {
        return (
          <ReservationItem
            hos={reservation.hospitalName}
            time={reservation.time}
            symptom={reservation.symptom}
            memo={reservation.note}
            people={0}
            onclick={() => cancelReservation(index)}
          />
        );
      })}
    </div>
  );
}

export default MyList;
