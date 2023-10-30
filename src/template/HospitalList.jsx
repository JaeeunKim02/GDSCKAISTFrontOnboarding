import React from 'react';
import Chip from '../components/Chip';
import Listitem from '../components/Listitem';
import Colors from '../style/Colors';

const chips = [
  {
    title: '전체',
  },
  {
    title: '내과',
  },
  {
    title: '이비인후과',
  },
];

const items = [
  {
    hos: '내과',
    title: '이희찬 내과',
    date: '오늘 09:00 ~ 18:00',
    loc: '대전 서구 만년동',
    people: '3명',
  },
  {
    hos: '이비인후과',
    title: '구글 이비인후과',
    date: '오늘 휴무',
    loc: '대전 서구 월평동',
    people: '-',
  },
];

function HospitalList() {
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
    frame4: {
      display: 'flex',
      padding: 'var(--none, 0px)',
      alignItems: 'center',
      gap: 'var(--1, 8px)',
      borderRadius: 'var(--none, 0px)',
    },
  };
  return (
    <div style={styles.layout}>
      <div style={styles.frame4}>
        {chips.map(chip => {
          return <Chip title={chip.title} />;
        })}
      </div>
      {items.map(item => {
        return <Listitem hos={item.hos} title={item.title} date={item.date} location={item.loc} people={item.people} />;
      })}
    </div>
  );
}

export default HospitalList;
